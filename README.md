
## 📚 API Reference

### `fetchUserSleepData(userId, options)`

Fetches sleep data for a specific user.

- **Parameters:**
  - `userId` (String): The ID of the user whose sleep data is being fetched.
  - `options` (Object): Optional parameters to customize the request (e.g., date range, filtering rules).

### `fetchAllSleepData(options)`

Fetches sleep data for all users based on specified options.

- **Parameters:**
  - `options` (Object): Optional parameters to customize the request.

### Data Processing Functions

- `calculateAverageSleepHours(sleepData)`: Calculates the average hours of sleep from an array of sleep entries.
- `applyCustomMetrics(sleepData, customRules)`: Applies custom metrics based on specified rules.

## 🤝 Contributing

We love contributions! If you'd like to help improve this SDK, please follow these steps:

1. **Fork the repository.**
2. **Create a new branch** (`git checkout -b feature/YourFeature`).
3. **Make your changes** and commit them (`git commit -m 'Add some feature'`).
4. **Push to the branch** (`git push origin feature/YourFeature`).
5. **Open a pull request**.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Thank you for checking out the SleepDAO Partner SDK! We look forward to seeing how you integrate our technology into your applications. If you have any questions or feedback, feel free to reach out!
