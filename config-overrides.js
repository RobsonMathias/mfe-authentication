module.exports = (config, env) => {
    config.output.filename = 'static/js/[name].js';
    config.output.chunkFilename = 'static/js/[name].js';
    return config
};
