const { override } = require('customize-cra');

module.exports = {
    webpack: override(
        (config) => {
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
