const NodeCache = require('node-cache');

// Create a new cache instance with a default TTL of 1 hour
const cache = new NodeCache({ stdTTL: 3600 });

/**
 * Retrieves cached data for a given key.
 * @param {String} key - The cache key.
 * @returns {Object|null} - The cached data or null if not found.
 */
function getCachedData(key) {
    return cache.get(key);
}

/**
 * Sets or updates cached data for a given key with a specified TTL.
 * @param {String} key - The cache key.
 * @param {Object} data - The data to cache.
 * @param {Number} ttl - Time-to-live in seconds for the cached data.
 */
function setCachedData(key, data, ttl) {
    cache.set(key, data, ttl);
}

/**
 * Clears all cached historical data.
 */
function clearHistoricalCache() {
    cache.flushAll();
}

module.exports = {
    getCachedData,
    setCachedData,
    clearHistoricalCache,
};
