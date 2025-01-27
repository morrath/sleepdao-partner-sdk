function calculateAverageSleepHours(sleepData) {
    const totalHours = sleepData.reduce((sum, entry) => sum + entry.duration, 0);
    return totalHours / sleepData.length;
}

function applyCustomMetrics(sleepData, customRules) {
    return sleepData.filter(entry => entry.sleepQuality >= customRules.minQuality);
}

module.exports = {
    calculateAverageSleepHours,
    applyCustomMetrics,
};
