const config = require('./config/index');

async function initialize() {
    console.log(`SDK Initialized in ${config.environment} mode.`);
}

module.exports = { sdk, initialize };
