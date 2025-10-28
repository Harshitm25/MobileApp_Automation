# Quick Setup Guide for Android Automation

## Step-by-Step Instructions

### Step 1: Install Prerequisites

#### Install Node.js (if not already installed)
```bash
# Check if Node.js is installed
node --version

# If not installed, download from https://nodejs.org/
# Or use Homebrew on macOS:
brew install node
```

#### Install Appium and UiAutomator2 Driver
```bash
# Install Appium globally
npm install -g appium

# Install UiAutomator2 driver for Android
appium driver install uiautomator2

# Verify installation
appium --version
appium driver list
```

#### Install Android Studio
1. Download from: https://developer.android.com/studio
2. Install Android SDK (SDK Platform and SDK Build Tools)
3. Set up Android emulator

### Step 2: Install Project Dependencies

```bash
cd /Users/testvagrant/smoneyMobile
npm install
```

### Step 3: Set Up Android Emulator

1. Open Android Studio
2. Go to AVD Manager (Android Virtual Device Manager)
3. Create a new emulator:
   - Click "Create Virtual Device"
   - Choose a device (e.g., Pixel 6)
   - Select a system image (API Level 30+ recommended)
   - Click "Finish"

**Start the emulator:**
```bash
# Option 1: Start from Android Studio AVD Manager
# Option 2: From command line
emulator -avd YourEmulatorName
```

### Step 4: Get Test APK

Download a sample APK for testing:

```bash
# Create apps directory if it doesn't exist
mkdir -p apps

# Download ApiDemos APK (sample app)
curl -L https://github.com/appium/sample-code/releases/download/1.3/ApiDemos-debug.apk -o apps/ApiDemos-debug.apk
```

### Step 5: Find Your Emulator Name

```bash
# List connected devices
adb devices

# List available emulators
emulator -list-avds
```

### Step 6: Update wdio.conf.ts

Open `wdio.conf.ts` and update the device name if needed:

```typescript
capabilities: [{
  // ... other capabilities
  'appium:deviceName': 'your_emulator_name', // Update this
  'appium:platformVersion': '13.0', // Match your emulator version
}]
```

### Step 7: Start Appium Server

In a new terminal window:
```bash
appium
```

Leave this running in the background.

### Step 8: Run Tests

In another terminal:
```bash
cd /Users/testvagrant/smoneyMobile
npm test
```

## Expected Output

You should see:
- Appium server running on default port 4723
- Appium session created
- Test execution starting
- App launching on emulator
- Test results in terminal

## Troubleshooting

### Issue: "Cannot find module '@wdio/appium-service'"
**Solution:** Run `npm install`

### Issue: "No devices found"
**Solution:** 
- Ensure emulator is running: `adb devices`
- Check emulator name in wdio.conf.ts matches actual emulator

### Issue: "Connection refused"
**Solution:** Ensure Appium server is running: `appium`

### Issue: "App not installed"
**Solution:** Check APK path in wdio.conf.ts and ensure file exists

### Issue: "Device not ready"
**Solution:** Wait a few seconds after emulator starts before running tests

## Quick Test Commands

```bash
# Check connected devices
adb devices

# Install APK manually
adb install apps/ApiDemos-debug.apk

# Uninstall app
adb uninstall io.appium.android.apis

# View device logs
adb logcat

# Get device info
adb shell getprop ro.build.version.release
```

## Verification Checklist

- [ ] Node.js installed (`node --version`)
- [ ] Appium installed (`appium --version`)
- [ ] UiAutomator2 driver installed (`appium driver list`)
- [ ] Android emulator created in Android Studio
- [ ] Emulator running (`adb devices` shows device)
- [ ] APK file in apps directory
- [ ] Appium server running (`appium` in terminal)
- [ ] Tests run successfully (`npm test`)

