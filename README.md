# 🌙 Insomnia Partner SDK

Welcome to the **Insomnia Partner SDK**! This powerful toolkit enables you to securely integrate user sleep data into your platform. With flexible features and customizable data retrieval and processing, you can gain valuable insights into user sleep patterns.

---

## 📖 Table of Contents

- [✨ Key Features](#key-features)
- [🚀 Installation](#installation)
- [🛠️ Usage](#usage)
- [📚 API Reference](#api-reference)
- [⚙️ Configuration](#configuration)
- [🤝 Contributing](#contributing)
- [📄 License](#license)
- [💬 Support and Contact](#support-and-contact)

---

## ✨ Key Features

- **🔒 Secure Data Access**: Access user sleep data securely with a unique API key.
- **⚙️ Configurable Data Handling**: Customize data fetching and processing to suit your needs.
- **📊 Comprehensive Data Retrieval**: Retrieve individual user data or perform bulk operations.
- **📈 Data Transformation**: Analyze and transform raw sleep data for deeper insights.
- **🌐 Multi-Environment Support**: Switch seamlessly between development, staging, and production environments.
- **📉 Rate Limiting**: Prevent API overuse with customizable rate-limiting settings.
- **💾 Caching**: Reduce repetitive API calls with caching for older data.

---

## 🚀 Installation

Follow these steps to set up the SDK in your project:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/morrath/insomnia.git
   cd insomnia
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:

   Create a `.env` file in the root directory and add the following:

   ```plaintext
   # Your unique API key issued by Insomnia
   INSOMNIA_API_KEY=your_api_key_here

   # Environment setting: development, staging, or production
   NODE_ENV=development

   # Base URL for the Insomnia API
   API_BASE_URL=https://api.insomnia.com

   # Rate limit settings
   MAX_REQUESTS_PER_MINUTE=60
   BURST_LIMIT=10
   ```

---

## 🛠️ Usage

Once installed, you can start using the SDK. Here’s an example to fetch and process sleep data:

```javascript
// app.js
const { sdk, initialize } = require('./src/index');

async function main() {
    await initialize();

    try {
        const userId = '12345'; // Replace with a valid user ID
        const sleepData = await sdk.fetchUserSleepData(userId);

        console.log('🌟 User Sleep Data:', sleepData);

        const averageSleepHours = calculateAverageSleepHours(sleepData);
        console.log('📋 Average Sleep Hours:', averageSleepHours);
    } catch (error) {
        console.error('❌ Error fetching sleep data:', error);
    }
}

main();
```

Here’s an example to delete multiple sleep data records:

```javascript
// deleteRecords.js
const { sdk, initialize } = require('./src/index');

async function main() {
    await initialize();

    try {
        const idsToDelete = ['id1', 'id2', 'id3']; // Replace with valid record IDs
        const options = { forceDelete: true }; // Ensure deletion proceeds without confirmation

        const result = await sdk.batchDeleteSleepData(idsToDelete, options);
        console.log('✅ Successfully deleted records:', result);
    } catch (error) {
        console.error('❌ Error during batch deletion:', error);
    }
}

main();
```

Here’s an example to use caching utilities:

```javascript
// cacheExample.js
const { getCachedData, setCachedData, clearHistoricalCache } = require('./src/services/cache');

// Set data in cache
setCachedData('user_12345', { sleepHours: 8 }, 3600); // Cache for 1 hour

// Retrieve cached data
const cachedData = getCachedData('user_12345');
console.log('📦 Cached Data:', cachedData);

// Clear cache
clearHistoricalCache();
console.log('🧹 Cache cleared');
```

---

## 📚 API Reference

### `fetchUserSleepData(userId, options)`

Fetch sleep data for a specific user.

- **Parameters:**
  - `userId` (String): The ID of the user.
  - `options` (Object): Optional parameters (e.g., date range, filters).

### `fetchAllSleepData(options)`

Retrieve sleep data for all users based on specified options.

- **Parameters:**
  - `options` (Object): Optional parameters to customize the request.

### `batchDeleteSleepData(idsToDelete, options)`

Delete multiple sleep data records based on their IDs.

- **Parameters:**
  - `idsToDelete` (Array): An array of IDs of the records to be deleted.
  - `options` (Object): Optional parameters for deletion (e.g., additional filters).
  - `forceDelete` (Boolean): If true, deletion will proceed without confirmation; otherwise, it prompts for confirmation.

### Rate-Limiting Behavior

The SDK implements rate-limiting to prevent overuse of the API:

- **Error Code:** `ERROR_RATE_LIMIT_EXCEEDED`
- **Description:** This error occurs when the configured rate limit is exceeded. Use exponential backoff or retry logic to handle such errors gracefully.

### Caching Utilities

The SDK includes caching utilities to minimize redundant API calls:

- \`\`: Retrieve cached data for a given key.
- \`\`: Cache data with a specified time-to-live (TTL) in seconds.
- \`\`: Clear all cached data.

---

## ⚙️ Configuration

### Rate Limit Settings

You can customize rate limits in `src/config/index.js` or via environment variables:

- \`\`: The maximum number of requests allowed per minute (default: 60).
- \`\`: The maximum number of requests allowed in a burst (default: 10).

Example configuration in `.env`:

```plaintext
MAX_REQUESTS_PER_MINUTE=80
BURST_LIMIT=15
```

These settings can be adjusted based on the environment (development, staging, or production) to suit different use cases.

### Caching Settings

Caching can be enabled or disabled programmatically. The default time-to-live (TTL) for cached data is 1 hour. You can modify this in the `cache.js` file:

```javascript
const cache = new NodeCache({ stdTTL: 3600 }); // Default TTL: 3600 seconds
```

Use caching to speed up repeated lookups for older data, reducing redundant API calls and improving performance.

---

## 🤝 Contributing

We welcome contributions! Follow these steps to contribute:

1. **Fork the Repository**.

2. **Create a New Branch**:

   ```bash
   git checkout -b feature/YourFeature
   ```

3. **Make Your Changes** and Commit:

   ```bash
   git commit -m 'Add some feature'
   ```

4. **Push to the Branch**:

   ```bash
   git push origin feature/YourFeature
   ```

5. **Open a Pull Request**.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 💬 Support and Contact

If you have any questions or need assistance, contact us through:

- **Email**: [support@insomnia.com](mailto\:support@insomnia.com)
- **Community Forum**: [community.insomnia.com](https://community.insomnia.com)

---

Thank you for using the Insomnia Partner SDK! We look forward to seeing how you integrate sleep data into your applications. Your feedback and suggestions are always welcome!

