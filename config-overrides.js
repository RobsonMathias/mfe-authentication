const { override } = require('customize-cra');
const { edit, remove, getPaths } = require('@rescripts/utilities');
const path = require('path');

const addLoaders = (loaderOptions = {}) => config => {
    const mode = process.env.NODE_ENV === 'development' ? 'dev' : 'prod';

    // Need these for production mode, which are copied from react-scripts
    const shouldUseSourceMap = mode === 'prod' && process.env.GENERATE_SOURCEMAP !== 'false';
    const cssRegex = /\.css$/;

    //Matchers to find the array of rules and css-file loader
    const loadersMatcher = inQuestion => inQuestion.rules && inQuestion.rules.find(rule => Array.isArray(rule.oneOf));
    const cssMatcher = inQuestion => inQuestion.test && inQuestion.test.toString() === cssRegex.toString();

    //Return set of loaders needed to process css files
    const getStyleLoader = () => [
        {
            loader: 'style-loader',
            options: { injectType: 'lazyStyleTag' }
        },
        {
            loader: require.resolve('css-loader'),
            options: { importLoaders: 1 }
        },
        {
            loader: require.resolve('postcss-loader'),
            options: {
                ident: 'postcss',
                plugins: () => [
                    require('postcss-flexbugs-fixes'),
                    require('postcss-preset-env')({
                        autoprefixer: {
                            flexbox: 'no-2009'
                        },
                        stage: 3
                    })
                ],
                sourceMap: shouldUseSourceMap
            }
        }
    ];

    //Transformer function
    const transform = match => ({
        ...match,
        rules: [
            ...match.rules.filter(rule => !Array.isArray(rule.oneOf)),
            {
                oneOf: [
                    {
                        test: cssRegex,
                        exclude: [path.resolve(__dirname, 'node_modules')],
                        use: getStyleLoader(),
                        sideEffects: true
                    },
                    ...match.rules.find(rule => Array.isArray(rule.oneOf)).oneOf
                ]
            }
        ]
    });

    //Remove the set of already configured loaders to process css files
    config = remove(getPaths(cssMatcher, config), config);

    //Add our set of newly configured loaders
    config = edit(transform, getPaths(loadersMatcher, config), config);

    return config;
};


module.exports = {
    webpack: override(
        (config) => {

            config = addLoaders()(config);
            config.resolve.extensions.push('.scss', '.css');
            config.output.libraryTarget = 'amd';
            config.output.filename = 'scripts/[name].js';
            config.output.chunkFilename = 'scripts/[name].js';
            config.optimization.splitChunks = {
                cacheGroups: {
                    default: false
                }
            };
            config.optimization.runtimeChunk = false;
            return config;
        },
    ),

    jest: config => {
        return config;
    },

    devServer: configFunction => (proxy, allowedHost) => {
        const config = configFunction(proxy, allowedHost);
        config.disableHostCheck = true;
        config.headers = { 'Access-Control-Allow-Origin': '*' };
        return config;
    },

    paths: (paths, env) => {
        return paths;
    }
};
