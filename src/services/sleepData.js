const axios = require('axios');
const config = require('../config/index');
const { checkRateLimit } = require('./rateLimiter'); // Importing the rate limiter
const { getCachedData, setCachedData } = require('./cache'); // Importing caching utilities

const API_BASE_URL = process.env.API_BASE_URL;

/**
 * Fetches sleep data for a specific user.
 * @param {String} userId - The ID of the user whose data you want to retrieve.
 * @param {Object} options - Optional parameters to customize the request (e.g., date range, filtering rules).
 * @returns {Promise<Object>} - The user's sleep data.
 */
async function fetchUserSleepData(userId, options = {}) {
    if (!checkRateLimit()) {
        throw new Error('ERROR_RATE_LIMIT_EXCEEDED'); // Throw error when rate limit is exceeded
    }

    const cacheKey = `userSleepData_${userId}`;
    const cachedData = getCachedData(cacheKey);

    // Check if we have cached data older than 6 months
    if (cachedData) {
        return cachedData;
    }

    const response = await axios.get(`${API_BASE_URL}/sleep/${userId}`, {
        headers: { Authorization: `Bearer ${config.apiKey}` },
        params: { ...config.defaultOptions, ...options },
    });

    // Cache the fetched data
    setCachedData(cacheKey, response.data, 21600); // Cache for 6 hours (21600 seconds)
    
    return response.data;
}

/**
 * Retrieves sleep data for all users based on specified options.
 * @param {Object} options - Optional parameters to customize the request.
 * @returns {Promise<Array>} - An array of sleep data for all users.
 */
async function fetchAllSleepData(options = {}) {
    if (!checkRateLimit()) {
        throw new Error('ERROR_RATE_LIMIT_EXCEEDED'); // Throw error when rate limit is exceeded
    }

    const cacheKey = 'allSleepData';
    const cachedData = getCachedData(cacheKey);

    // Check if we have cached data older than 6 months
    if (cachedData) {
        return cachedData;
    }

    const response = await axios.get(`${API_BASE_URL}/sleep/all`, {
        headers: { Authorization: `Bearer ${config.apiKey}` },
        params: options,
    });

    // Cache the fetched data
    setCachedData(cacheKey, response.data, 21600); // Cache for 6 hours (21600 seconds)

    return response.data;
}

/**
 * Deletes multiple sleep data records based on their IDs.
 * @param {Array<String>} idsToDelete - An array of IDs of the records to be deleted.
 * @param {Object} options - Optional parameters for deletion (e.g., additional filters).
 * @param {boolean} forceDelete - If true, deletion will proceed without confirmation; otherwise, it prompts for confirmation.
 * @returns {Promise<Object>} - The response from the deletion request.
 */
async function batchDeleteSleepData(idsToDelete, options = {}, forceDelete = false) {
    if (!checkRateLimit()) {
        throw new Error('ERROR_RATE_LIMIT_EXCEEDED'); // Throw error when rate limit is exceeded
    }

    if (!forceDelete) {
        const confirmation = confirm(`Are you sure you want to delete ${idsToDelete.length} records? This action cannot be undone.`);
        if (!confirmation) {
            throw new Error('Deletion cancelled by user.');
        }
    }

    const response = await axios.delete(`${API_BASE_URL}/sleep`, {
        headers: { Authorization: `Bearer ${config.apiKey}` },
        data: { ids: idsToDelete, ...options },
    });
    
    return response.data;
}

module.exports = {
    fetchUserSleepData,
    fetchAllSleepData,
    batchDeleteSleepData,
};
