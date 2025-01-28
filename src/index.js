require('dotenv').config(); // Load environment variables from .env file

const config = require('./config/index');
const { fetchUserSleepData, fetchAllSleepData, batchDeleteSleepData } = require('./services/sleepData');
const { calculateAverageSleepHours } = require('./services/dataProcessing');
const { clearHistoricalCache } = require('./services/cache');

const sdk = {
    fetchUserSleepData,
    fetchAllSleepData,
    calculateAverageSleepHours,
    batchDeleteSleepData,
    clearHistoricalCache,
};

async function initialize() {
    console.log(`SDK Initialized in ${config.environment} mode.`);
}

module.exports = { sdk, initialize };
