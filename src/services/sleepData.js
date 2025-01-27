const axios = require('axios');
const config = require('../config/index');

const API_BASE_URL = process.env.API_BASE_URL;

async function fetchUserSleepData(userId, options = {}) {
    const response = await axios.get(`${API_BASE_URL}/sleep/${userId}`, {
        headers: { Authorization: `Bearer ${config.apiKey}` },
        params: { ...config.defaultOptions, ...options },
    });
    return response.data;
}

module.exports = {
    fetchUserSleepData,
};
