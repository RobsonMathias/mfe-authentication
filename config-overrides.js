const path = require('path');

module.exports = (config, env) => {
    config.output.libraryTarget = 'amd';
    config.output.filename = 'scripts/[name].js';
    config.output.chunkFilename = 'scripts/[name].js';
    config.optimization.splitChunks = {
        cacheGroups: {
            default: false
        }
    };
    config.optimization.runtimeChunk = false;
    return config
};
