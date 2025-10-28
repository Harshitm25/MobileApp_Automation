# 🚀 Quick Start Guide

Get your Android automation tests running in 5 minutes!

## Prerequisites Check ✅

First, verify you have everything installed:

```bash
# Check Node.js (should be v18+)
node --version

# Check Appium (install if missing: npm install -g appium)
appium --version

# Check if UiAutomator2 driver is installed
appium driver list
```

If Appium or UiAutomator2 are missing:
```bash
npm install -g appium
appium driver install uiautomator2
```

## Step 1: Get Test APK (Required!) 📱

You need an APK file to test. Choose one:

### Option A: Download Sample APK
```bash
cd apps
curl -L https://github.com/appium/sample-code/raw/master/sample-code/apps/ApiDemos-debug.apk -o ApiDemos-debug.apk
```

### Option B: Build Your Own
- Build APK in Android Studio
- Copy to `apps/` directory

## Step 2: Start Android Emulator 📲

### Using Android Studio:
1. Open Android Studio
2. Click "Device Manager"
3. Click Play ▶️ button next to your emulator
4. Wait for emulator to fully boot

### Or via Command Line:
```bash
emulator -avd YourEmulatorName
```

Verify emulator is running:
```bash
adb devices
# Should show your device (e.g., emulator-5554)
```

## Step 3: Configure wdio.conf.ts ⚙️

Update the device name and APK path:

```typescript
// In wdio.conf.ts
capabilities: [{
  platformName: 'Android',
  'appium:deviceName': 'your_emulator_name', // ← Update this
  'appium:platformVersion': '13.0',         // ← Match your emulator
  'appium:app': './apps/ApiDemos-debug.apk', // ← Verify path
  // ... rest of config
}]
```

To find your emulator name:
```bash
adb devices
# Output: emulator-5554  device
# Use the ID (e.g., emulator-5554) or emulator name
```

## Step 4: Start Appium Server 🖥️

Open a new terminal and run:
```bash
appium
```

Leave this running. You should see:
```
[Appium] Welcome to Appium v2.x.x
[Appium] Appium REST http interface listener started on 0.0.0.0:4723
```

## Step 5: Run Tests! 🎯

Open another terminal and run:
```bash
cd /Users/testvagrant/smoneyMobile
npm test
```

## Expected Output 📊

You should see:
```
[0-0] Starting Android test suite...
[0-0] Current package: io.appium.android.apis
[0-0] Current activity: io.appium.android.apis.ApiDemos
[0-0] Running: should launch the app successfully
[0-0] ✓ should launch the app successfully (XXXXms)
[0-0] Running: should verify app is accessible
[0-0] ✓ should verify app is accessible (XXXXms)
```

## Troubleshooting 🔧

### "No devices found"
```bash
# Make sure emulator is running
adb devices

# If no devices, start emulator in Android Studio
```

### "App not installed"
- Verify APK exists in `apps/` directory
- Check the path in `wdio.conf.ts`

### "Cannot find package"
```bash
npm install
```

### "Connection refused"
- Make sure Appium server is running in another terminal

### "Device not ready"
- Wait a few more seconds after emulator starts
- Emulator needs to be fully booted

## What's Next? 🎓

Once your first test passes:

1. **Explore the test files:**
   - `src/specs/first-test.ts` - Basic test
   - `src/specs/example-test.ts` - Advanced techniques

2. **Modify the test:**
   - Change elements to click
   - Add more assertions
   - Explore app features

3. **Add more tests:**
   - Create new spec files
   - Add them to `wdio.conf.ts`

4. **Use helpers:**
   - Import from `src/utils/helpers.ts`
   - Reusable functions for common tasks

## Example: Custom Test

Create `src/specs/my-test.ts`:

```typescript
describe('My Custom Test', () => {
  it('should do something', async () => {
    await driver.pause(2000);
    
    // Your test code here
    const element = await driver.$('~someElement');
    await element.click();
    
    // Assert something
    expect(true).toBe(true);
  });
});
```

Then add to `wdio.conf.ts`:
```typescript
specs: [
  './src/specs/first-test.ts',
  './src/specs/my-test.ts'  // Add this
],
```

## Quick Commands Cheatsheet 📋

```bash
# Run tests
npm test

# Check devices
adb devices

# View logs
adb logcat

# Install app manually
adb install apps/ApiDemos-debug.apk

# Uninstall app
adb uninstall io.appium.android.apis

# List available emulators
emulator -list-avds

# Start Appium
appium

# Run specific test
npx wdio run wdio.conf.ts --spec src/specs/first-test.ts
```

## Success Indicators ✅

You'll know it's working when:
- [x] Appium server shows "listener started on port 4723"
- [x] Android emulator is running and responsive
- [x] `npm test` executes without "device not found" errors
- [x] Tests show "✓ passing" in terminal
- [x] App launches on emulator during test execution

## Need Help? 💬

- Check `README.md` for detailed documentation
- Check `SETUP_GUIDE.md` for troubleshooting
- Check `PROJECT_SUMMARY.md` for overview
- Check `src/specs/README.md` for test examples

Happy Testing! 🎉

