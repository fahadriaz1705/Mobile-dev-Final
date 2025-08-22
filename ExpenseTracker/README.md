# Expense Tracker

A React Native expense tracking application built with Expo, featuring Firebase authentication, real-time data synchronization, and comprehensive expense management.

## Features

### MVP Features

- ✅ Daily expenses/income tracking
- ✅ Transaction categorization (food, travel, bills, shopping, salary, other)
- ✅ Firebase Firestore data persistence
- ✅ Authentication (signup, login, logout, reset password)
- ✅ Tab navigation (Wallet, Settings, Account)
- ✅ Light/dark theme with persistence
- ✅ Internationalization (i18n) ready

### Future Features (Planned)

- 📊 Monthly/weekly summaries with charts
- 🚨 Budget alerts and overspending notifications
- 📄 Export to CSV/PDF
- 👥 Shared group expenses with friends

## Tech Stack

- **Framework**: Expo + React Native
- **Navigation**: React Navigation v6
- **State Management**: Context API + Hooks
- **Authentication**: Firebase Auth
- **Database**: Firebase Firestore
- **Forms**: Formik + Yup validation
- **Internationalization**: i18next + react-i18next
- **UI Components**: react-native-tableview-simple
- **Icons**: Ionicons (via @expo/vector-icons)
- **Testing**: Jest + @testing-library/react-native

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI
- Firebase project setup

## Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd ExpenseTracker
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**

   ```bash
   cp .env.example .env
   ```

   Update `.env` with your Firebase configuration:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication (Email/Password)
   - Create a Firestore database
   - Copy your Firebase config values to `.env`

4. **Start the development server**
   ```bash
   npm start
   ```

## Available Scripts

- `npm start` - Start Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator
- `npm run web` - Run in web browser
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm test` - Run tests
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
src/
├── components/          # Reusable UI components
├── contexts/           # React Context providers
├── locales/            # Internationalization files
│   └── en/            # English translations
├── navigation/         # Navigation configuration
├── screens/           # Screen components
│   ├── auth/          # Authentication screens
│   ├── settings/      # Settings screens
│   ├── user/          # User account screens
│   └── wallet/        # Wallet/transaction screens
├── services/          # Firebase and API services
└── utils/             # Utility functions and helpers
```

## Firebase Setup

1. Create a new Firebase project
2. Enable Authentication with Email/Password provider
3. Create a Firestore database in test mode
4. Set up security rules for the `users/{uid}/transactions` collection
5. Copy your Firebase config to `.env`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License.
