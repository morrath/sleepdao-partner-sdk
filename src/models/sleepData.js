class SleepData {
    constructor(userId, date, duration, sleepQuality) {
        this.userId = userId;
        this.date = date;
        this.duration = duration; // Duration in hours
        this.sleepQuality = sleepQuality; // Quality rating from 1 to 5
    }

    static validate(data) {
        // Basic validation checks
        if (!data.userId || !data.date || typeof data.duration !== 'number') {
            throw new Error('Invalid sleep data');
        }
        return true;
    }
}

module.exports = SleepData;
