const config = {
    apiKey: process.env.SLEEPDAO_API_KEY,
    environment: process.env.NODE_ENV || 'development', 
    defaultOptions: {
        dateRange: { start: '2023-01-01', end: '2023-12-31' },
        filteringRules: {},
    },
};

module.exports = config;
