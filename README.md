# 🌙 Insomnia Partner SDK

Welcome to the **Insomnia Partner SDK**! This powerful toolkit enables you to securely integrate user sleep data into your platform. With flexible features and customizable data retrieval and processing, you can gain valuable insights into user sleep patterns.

---

## 📖 Table of Contents

- [✨ Key Features](#key-features)
- [🚀 Installation](#installation)
- [🛠️ Usage](#usage)
- [📚 API Reference](#api-reference)
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
        console.log('🛌 Average Sleep Hours:', averageSleepHours);
    } catch (error) {
        console.error('❌ Error fetching sleep data:', error);
    }
}

main();
```

### Main Functions

The SDK provides several key functions for accessing and processing sleep data:

1. **`fetchUserSleepData(userId, options)`**: Fetch sleep data for a specific user.
2. **`fetchAllSleepData(options)`**: Retrieve sleep data for all users based on specified options.
3. **Data Processing Functions**: Calculate average sleep hours or apply custom metrics.

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

### Data Processing Functions

- `calculateAverageSleepHours(sleepData)`: Calculates the average hours of sleep from an array of sleep entries.
- `applyCustomMetrics(sleepData, customRules)`: Applies custom metrics based on specified rules.

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

- **Email**: support@insomnia.com
- **Community Forum**: [community.insomnia.com](https://community.insomnia.com)

---

Thank you for using the Insomnia Partner SDK! We look forward to seeing how you integrate sleep data into your applications. Your feedback and suggestions are always welcome!

