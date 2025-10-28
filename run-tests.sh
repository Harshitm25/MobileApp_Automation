#!/bin/bash

# Set Android environment variables
export ANDROID_HOME=~/Library/Android/sdk
export ANDROID_SDK_ROOT=~/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/platform-tools:$ANDROID_HOME/emulator

echo "✅ Android environment configured"
echo "📱 Android SDK Path: $ANDROID_HOME"
echo ""

# Check if emulator is running
echo "🔍 Checking for running devices..."
adb devices

echo ""
echo "🚀 Running WDIO tests..."
echo ""

# Run the tests
npm test

