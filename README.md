MyNotes App

A simple, fast, and secure cross-platform mobile application built with React Native and TypeScript for managing personal notes.

Note: This application saves all note data locally on your device's persistent storage. Data is not synced to a cloud service or remote server.

🌟 Features

Offline First: All functionality works without an internet connection.

Local Storage: Notes are stored directly on your device (AsyncStorage).

Cross-Platform: Built for both iOS and Android using React Native.

Intuitive Interface: Focuses on clean design and ease of use for quick note-taking.

🚀 Getting Started

Prerequisites

Before running the project locally, ensure you have the following installed:

Node.js (LTS version recommended)

npm or Yarn

React Native CLI or Expo CLI (depending on project setup)

JDK (Java Development Development Kit)

Android Studio (for Android development) or Xcode (for iOS development)

Installation

Clone the Repository:

git clone https://github.com/atuljalu/Notes.git
cd MyNotes


Install Dependencies:

npm install
# OR
yarn install


Running the App Locally

For Android

To run the app on an Android emulator or connected device:

npx react-native run-android


For iOS (Requires macOS)

To run the app on an iOS simulator or connected device:

Install iOS dependencies (if using a native setup):

cd ios
pod install
cd ..


Run the app:

npx react-native run-ios


🤝 Contributing

Contributions are welcome! If you find a bug or have an idea for a feature, please feel free to open an issue or submit a pull request.
