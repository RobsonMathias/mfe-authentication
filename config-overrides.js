const path = require('path');

module.exports = (config, env) => {
    config.entry = {
        'main': './src/index.tsx'
    };
    config.resolve.extensions = ['.tsx', '.ts', '.js'];
    config.output.filename = 'static/js/[name].js';
    config.output.chunkFilename = 'static/js/[name].js';
    config.output.libraryTarget = 'umd';
    return config
};
