require('dotenv').config(); // Load environment variables from .env file

if (!process.env.SLEEPDAO_API_KEY) {
    throw new Error('API key is not set in the environment variables.');
}

const config = {
    apiKey: process.env.SLEEPDAO_API_KEY,
    environment: process.env.NODE_ENV || 'development',
    defaultOptions: {
        dateRange: { start: '2023-01-01', end: '2023-12-31' },
        filteringRules: {},
    },
    rateLimit: {
        maxRequestsPerMinute: process.env.MAX_REQUESTS_PER_MINUTE || 60, 
        burstLimit: process.env.BURST_LIMIT || 10,            
    },
};

module.exports = config;
