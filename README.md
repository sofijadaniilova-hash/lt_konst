# lt_konst

A simple React Native quiz app (Expo) about the Constitution of Lithuania.

## Run locally

Prerequisites: Node.js 18+, npm, and Expo tooling.

```bash
# Install Expo CLI (optional; you can also use npx)
npm install -g expo-cli

# Install dependencies
npm install

# Start the dev server (choose Android, iOS, or Web)
npx expo start
```

- Android: press `a` in the Expo terminal (device or emulator)
- iOS (macOS): press `i`
- Web: press `w`

## Project structure
- `App.js`: App entry component
- `index.js`: Registers the root component (Expo)
- `src/`:
  - `data/` – quiz data
  - `styles/` – shared styles
  - `components/` – reusable UI components
  - `screens/` – app screens

## Notes
- If you see missing dependency/version errors, run `npx expo install` to align versions.
- For Windows + Android, ensure Android Studio/SDK is set up or use Expo Go on a physical device.