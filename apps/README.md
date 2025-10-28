# APK Files

This directory should contain your Android APK files for testing.

## Getting Sample APK

### Option 1: Download from Appium Repository

Visit: https://github.com/appium-boneyard/sample-code/tree/master/sample-code/apps

Download: `ApiDemos-debug.apk`

Or use this command:
```bash
curl -L https://github.com/appium/sample-code/raw/master/sample-code/apps/ApiDemos-debug.apk -o apps/ApiDemos-debug.apk
```

### Option 2: Download Latest From Releases

```bash
curl -L https://github.com/appium/sample-code/releases/latest/download/ApiDemos-debug.apk -o apps/ApiDemos-debug.apk
```

### Option 3: Build Your Own

If you're testing your own app:
1. Build your APK using Android Studio
2. Copy it to this directory
3. Update the path in `wdio.conf.ts`

## Update Configuration

After adding your APK, update `wdio.conf.ts`:

```typescript
capabilities: [{
  // ...
  'appium:app': './apps/YourApp-debug.apk',
}]
```

## Using Any APK

You can test any APK by:

1. Placing it in this `apps/` directory
2. Updating the `'appium:app'` path in `wdio.conf.ts`
3. Running your tests

## Common APKs for Testing

- **ApiDemos**: Comprehensive demo app showing various Android features
- **ContactManager**: Simple app for testing CRUD operations
- **AndroidCalculator**: For testing calculator operations
- Your own apps!

