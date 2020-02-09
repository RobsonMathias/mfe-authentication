const path = require('path');

module.exports = (config, env) => {
    config.output.filename = 'scripts/[name].js';
    config.output.chunkFilename = 'scripts/[name].js';
    config.output.libraryTarget = 'amd';
    return config
};
