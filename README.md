# Android Automation with WDIO + TypeScript

This project demonstrates Android automation testing using WebdriverIO (WDIO), TypeScript, and Appium.

## Prerequisites

Before running the tests, ensure you have the following installed:

1. **Node.js** (v18 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **Appium CLI**
   - Install globally: `npm install -g appium`
   - Verify installation: `appium --version`
   - Install UiAutomator2 driver: `appium driver install uiautomator2`

3. **Android Studio**
   - Download from: https://developer.android.com/studio
   - Install Android SDK and build tools

4. **Android Emulator**
   - Create an emulator in Android Studio
   - API Level 30+ recommended
   - Start the emulator before running tests

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Add Test App (APK)

Download or build an Android APK and place it in the `apps` directory:

```bash
mkdir -p apps
# Copy your APK file here, e.g. apps/ApiDemos-debug.apk
```

For testing purposes, you can download the ApiDemos.apk from:
https://github.com/appium/sample-code/releases

### 3. Configure Emulator Name

Update `wdio.conf.ts` with your emulator name:

```typescript
capabilities: [{
  'appium:deviceName': 'YourEmulatorName', // Replace with your emulator name
  // ...
}]
```

To find your emulator name:
```bash
adb devices
```

### 4. Start Appium Server

```bash
appium
```

Keep this terminal open and running in the background.

### 5. Start Android Emulator

Launch your Android emulator from Android Studio or command line:
```bash
emulator -avd YourEmulatorName
```

### 6. Run Tests

```bash
npm test
```

Or specifically for Android:
```bash
npm run test:android
```

## Project Structure

```
.
├── src/
│   ├── specs/
│   │   └── first-test.ts       # Test files
│   └── utils/
│       └── driverconfig.ts     # Configuration utilities
├── apps/                        # APK files directory
├── wdio.conf.ts                # WebdriverIO configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies

```

## Test Files

- `src/specs/first-test.ts` - Contains your first Android test

## Configuration

### Capabilities in wdio.conf.ts

```typescript
capabilities: [{
  platformName: 'Android',
  'appium:deviceName': 'Android Emulator',
  'appium:platformVersion': '13.0',
  'appium:automationName': 'UiAutomator2',
  'appium:app': './apps/ApiDemos-debug.apk',
  'appium:autoGrantPermissions': true,
  'appium:newCommandTimeout': 300
}]
```

## Troubleshooting

### "Cannot find module" errors
Run `npm install` to install all dependencies.

### "Could not find APK"
Ensure the APK file exists in the `apps/` directory and the path in `wdio.conf.ts` is correct.

### "Connection refused" or "No devices found"
- Verify Appium server is running: `appium`
- Check emulator is running: `adb devices`
- Ensure emulator name matches in `wdio.conf.ts`

### "UiAutomator2 is not installed"
Run: `appium driver install uiautomator2`

## Next Steps

1. Add more test cases in `src/specs/`
2. Implement Page Object Model (POM) pattern
3. Add screenshots and video recording
4. Integrate with CI/CD
5. Add reporting tools (Allure, etc.)

## Resources

- WebdriverIO Docs: https://webdriver.io/
- Appium Docs: http://appium.io/
- TypeScript Docs: https://www.typescriptlang.org/

