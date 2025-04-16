# Hexa App

A modern mobile application built with Expo and React Native, featuring file-based routing and a comprehensive component system.

## 📱 Features

- Built with Expo SDK 52
- File-based routing using expo-router
- Internationalization with i18next
- State management with Zustand
- API requests with Axios and React Query
- Beautiful UI with expo-blur, linear-gradient, and more
- Safe area handling for different devices

## 🚀 Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- Yarn or npm
- Expo CLI

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/eneserdennn/hexa-app
   cd hexa-app
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```
   or
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npx expo start
   ```

4. Run the app:
   - Press `a` for Android
   - Press `i` for iOS
   - Press `w` for web
   - Scan the QR code with the Expo Go app on your device

## 📁 Project Structure

```
hexa-app/
├── app/                 # Main app files (file-based routing)
├── src/
│   ├── assets/          # Images, fonts, and other static assets
│   ├── components/      # Reusable UI components
│   ├── constants/       # App constants and configuration
│   ├── languages/       # Internationalization files
│   ├── screens/         # Screen components
│   ├── service/         # API services and data fetching
│   └── store/           # State management with Zustand
├── .env                 # Environment variables
├── app.json             # Expo configuration
└── package.json         # Dependencies and scripts
```

## 📱 Technologies

- [Expo](https://expo.dev/) - Framework and platform for universal React applications
- [React Native](https://reactnative.dev/) - Framework for building native apps using React
- [Expo Router](https://docs.expo.dev/router/introduction/) - File-based routing for Expo projects
- [React Query](https://tanstack.com/query/latest) - Data fetching and state management
- [Zustand](https://github.com/pmndrs/zustand) - State management
- [i18next](https://www.i18next.com/) - Internationalization framework

## 🧑‍💻 Development

### Available Scripts

- `yarn start` or `npm start` - Start the development server

