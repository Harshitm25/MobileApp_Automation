# Test Specifications

This directory contains all test spec files for Android automation.

## Test Structure

Each test file follows this basic structure:

```typescript
describe('Test Suite Name', () => {
  before(() => {
    // Setup code
  });

  it('should do something', async () => {
    // Test code
  });

  after(() => {
    // Cleanup code
  });
});
```

## Running Tests

```bash
# Run all tests
npm test

# Run specific test file
npx wdio run wdio.conf.ts --spec src/specs/first-test.ts
```

## Available APIs

### Driver Commands
- `driver.pause(ms)` - Pause execution
- `driver.getCurrentPackage()` - Get current package
- `driver.getCurrentActivity()` - Get current activity
- `driver.getContext()` - Get current context
- `driver.getPageSource()` - Get page source XML
- `driver.getWindowSize()` - Get screen dimensions

### Element Commands
- `await driver.$('selector')` - Find element
- `await element.click()` - Click element
- `await element.getText()` - Get element text
- `await element.isDisplayed()` - Check if displayed
- `await element.waitForDisplayed()` - Wait for element

### Touch Actions
- `driver.touchAction([...])` - Perform touch gestures
- `driver.performActions([...])` - Advanced gestures

## Selectors

### Accessibility ID (Recommended)
```typescript
const element = await driver.$('~accessibilityId');
```

### XPath
```typescript
const element = await driver.$('//android.widget.TextView[@text="Hello"]');
```

### Android UiAutomator
```typescript
const element = await driver.$('android=new UiSelector().text("Click me")');
```

### Class Name
```typescript
const element = await driver.$('android.widget.Button');
```

## Utilities

Import helper functions from `src/utils/helpers.ts`:

```typescript
import { waitForElement, clickByText, getText } from '../utils/helpers';

await clickByText('Sign In');
const text = await getText('~welcomeMessage');
```

