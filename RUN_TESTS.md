# How to Run Tests - Step by Step

## ✅ What's Already Done
- ✅ APK file copied to apps/ (money.super.apk)
- ✅ Configuration updated to use your APK
- ✅ Appium is running

## 🚀 Run Your Tests Now

### Step 1: Find Your Device Name

Open a terminal and find your device:

```bash
# Add Android SDK to PATH (if not already)
export PATH=$PATH:~/Library/Android/sdk/platform-tools

# Check connected devices
adb devices
```

You'll see output like:
```
List of devices attached
emulator-5554    device
```

**Copy the device ID** (e.g., `emulator-5554` or `127.0.0.1:5555`)

### Step 2: Update Device Name in wdio.conf.ts

If your device is NOT `emulator-5554`, update line 24 in `wdio.conf.ts`:

```typescript
'appium:deviceName': 'YOUR_DEVICE_ID', // e.g., 'emulator-5554'
```

### Step 3: Find Your Android Version

Check your emulator's Android version:

```bash
adb shell getprop ro.build.version.release
```

If it's NOT Android 13 (API 33), update line 25 in `wdio.conf.ts`:

```typescript
'appium:platformVersion': 'YOUR_VERSION', // e.g., '12.0', '11.0', etc.
```

### Step 4: Start Android Emulator (if not running)

```bash
# List available emulators
emulator -list-avds

# Start an emulator
emulator -avd YourEmulatorName
```

Wait for emulator to fully boot (home screen appears).

### Step 5: Verify Emulator is Ready

```bash
adb devices
# Should show: emulator-5554    device
```

### Step 6: Run Your Tests! 🎉

```bash
cd /Users/testvagrant/smoneyMobile
npm test
```

## 📊 Expected Output

You should see:
```
[0-0] Starting Android test suite...
[0-0] Running: should launch the app successfully
[0-0] Current package: <your.app.package.name>
[0-0] ✓ should launch the app successfully (3000ms)
[0-0] Running: should verify app is accessible
[0-0] ✓ should verify app is accessible (1500ms)

Spec Files:      1 passed, 1 total (100% completed)
Tests:           2 passed, 2 total (100% completed)
```

## 🔧 Quick Commands

```bash
# Check connected devices
adb devices

# Check Android version
adb shell getprop ro.build.version.release

# View device logs
adb logcat

# Install APK manually (if needed)
adb install apps/money.super.apk

# Take screenshot
adb shell screencap /sdcard/screenshot.png
adb pull /sdcard/screenshot.png .
```

## ⚠️ Troubleshooting

### "No devices found"
- Start emulator: `emulator -avd YourEmulatorName`
- Wait for boot: `adb devices` until status is "device"

### "Device not ready"
- Wait 30-60 seconds after emulator starts
- Ensure emulator is fully booted (shows home screen)

### "App not installed"
- Check APK path in wdio.conf.ts: `'appium:app': './apps/money.super.apk'`
- Verify file exists: `ls -lh apps/money.super.apk`

### "Connection refused"
- Appium must be running: `appium` in separate terminal
- Check Appium is on port 4723

### Wrong device name
```bash
adb devices
# Update 'appium:deviceName' in wdio.conf.ts with the ID shown
```

### Wrong Android version
```bash
adb shell getprop ro.build.version.release
# Update 'appium:platformVersion' in wdio.conf.ts
```

## 🎯 You're Ready!

Your setup is complete. Just:
1. Update device name (if needed)
2. Update Android version (if needed)
3. Run `npm test`

Happy testing! 🚀

