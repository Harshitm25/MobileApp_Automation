#!/bin/bash

echo "🚀 Setting up Android Automation with WDIO + TypeScript"
echo "========================================================"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"

# Check if Appium is installed
if ! command -v appium &> /dev/null; then
    echo "📦 Installing Appium globally..."
    npm install -g appium
else
    echo "✅ Appium is installed: $(appium --version)"
fi

# Install UiAutomator2 driver
echo "📦 Installing UiAutomator2 driver..."
appium driver install uiautomator2

# Install project dependencies
echo "📦 Installing project dependencies..."
npm install

# Create apps directory
echo "📁 Creating apps directory..."
mkdir -p apps

# Download sample APK if not already present
if [ ! -f "apps/ApiDemos-debug.apk" ]; then
    echo "📥 Downloading sample APK..."
    curl -L https://github.com/appium/sample-code/releases/download/1.3/ApiDemos-debug.apk -o apps/ApiDemos-debug.apk
    echo "✅ APK downloaded successfully"
else
    echo "✅ Sample APK already exists"
fi

echo ""
echo "========================================================"
echo "✅ Setup completed successfully!"
echo ""
echo "Next steps:"
echo "1. Create and start an Android emulator in Android Studio"
echo "2. Start Appium server: appium"
echo "3. Run tests: npm test"
echo ""
echo "For detailed instructions, see SETUP_GUIDE.md"
echo "========================================================"

