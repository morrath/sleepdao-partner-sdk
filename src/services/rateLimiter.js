const config = require('../config/index');

let requestCount = 0;
let lastResetTime = Date.now();

/**
 * Checks if the current request exceeds the configured rate limit.
 * @returns {boolean} - True if the request is allowed; false if it exceeds the limit.
 */
function checkRateLimit() {
    const currentTime = Date.now();

    // Reset the count every minute
    if (currentTime - lastResetTime > 60000) {
        requestCount = 0;
        lastResetTime = currentTime;
    }

    if (requestCount < config.rateLimit.maxRequestsPerMinute) {
        requestCount++;
        return true; // Request is allowed
    } else {
        return false; // Rate limit exceeded
    }
}

/**
 * Resets the rate limiter for testing purposes.
 */
function resetRateLimiter() {
    requestCount = 0;
    lastResetTime = Date.now();
}

module.exports = {
    checkRateLimit,
    resetRateLimiter,
};
