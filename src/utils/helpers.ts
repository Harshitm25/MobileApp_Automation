/**
 * Utility functions for Android test automation
 */

/**
 * Wait for an element to be displayed
 * @param selector - Element selector
 * @param timeout - Timeout in milliseconds
 */
export async function waitForElement(selector: string, timeout: number = 5000): Promise<void> {
  const element = await driver.$(selector);
  await element.waitForDisplayed({ timeout });
}

/**
 * Click on an element by text
 * @param text - Text to search for
 */
export async function clickByText(text: string): Promise<void> {
  const element = await driver.$(`android=new UiSelector().text("${text}")`);
  await element.waitForDisplayed();
  await element.click();
}

/**
 * Get text from element
 * @param selector - Element selector
 * @returns Element text
 */
export async function getText(selector: string): Promise<string> {
  const element = await driver.$(selector);
  await element.waitForDisplayed();
  return await element.getText();
}

/**
 * Swipe gesture
 * @param startX - Start X coordinate
 * @param startY - Start Y coordinate
 * @param endX - End X coordinate
 * @param endY - End Y coordinate
 * @param duration - Duration in milliseconds
 */
export async function swipe(startX: number, startY: number, endX: number, endY: number, duration: number = 1000): Promise<void> {
  await driver.touchAction([
    { action: 'press', x: startX, y: startY },
    { action: 'wait', ms: duration },
    { action: 'moveTo', x: endX, y: endY },
    { action: 'release' }
  ]);
}

/**
 * Take screenshot and save with timestamp
 * @param filename - Base filename
 */
export async function takeScreenshot(filename: string): Promise<void> {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const path = `./screenshots/${filename}-${timestamp}.png`;
  await driver.saveScreenshot(path);
  console.log(`Screenshot saved: ${path}`);
}

/**
 * Get device info
 */
export async function getDeviceInfo(): Promise<any> {
  return {
    package: await driver.getCurrentPackage(),
    activity: await driver.getCurrentActivity(),
    context: await driver.getContext(),
    orientation: await driver.getOrientation(),
    size: await driver.getWindowSize()
  };
}

/**
 * Tap on element or coordinates without deprecated elementId shape.
 */
export async function tap(target: string | { x: number; y: number }): Promise<void> {
  if (typeof target === 'string') {
    const el = await driver.$(target);
    await el.waitForDisplayed();
    await el.click();
    return;
  }
  await driver.performActions([
    {
      type: 'pointer',
      id: 'finger1',
      parameters: { pointerType: 'touch' },
      actions: [
        { type: 'pointerMove', duration: 0, x: target.x, y: target.y },
        { type: 'pointerDown', button: 0 },
        { type: 'pause', duration: 50 },
        { type: 'pointerUp', button: 0 }
      ]
    }
  ]);
  await driver.releaseActions();
}

/**
 * Long press using W3C actions (works across platforms)
 */
export async function longPress(target: string | { x: number; y: number }, durationMs: number = 1200): Promise<void> {
  let x: number; let y: number;
  if (typeof target === 'string') {
    const el = await driver.$(target);
    await el.waitForDisplayed();
    const loc = await el.getLocation();
    const size = await el.getSize();
    x = Math.floor(loc.x + size.width / 2);
    y = Math.floor(loc.y + size.height / 2);
  } else {
    x = target.x; y = target.y;
  }
  await driver.performActions([
    {
      type: 'pointer', id: 'finger1', parameters: { pointerType: 'touch' }, actions: [
        { type: 'pointerMove', duration: 0, x, y },
        { type: 'pointerDown', button: 0 },
        { type: 'pause', duration: durationMs },
        { type: 'pointerUp', button: 0 }
      ] }
  ]);
  await driver.releaseActions();
}

/**
 * Swipe by screen percentage using W3C actions
 */
export async function swipeByPercent(startXPct: number, startYPct: number, endXPct: number, endYPct: number, durationMs: number = 500): Promise<void> {
  const { width, height } = await driver.getWindowSize();
  const startX = Math.floor(width * startXPct);
  const startY = Math.floor(height * startYPct);
  const endX = Math.floor(width * endXPct);
  const endY = Math.floor(height * endYPct);

  await driver.performActions([
    {
      type: 'pointer', id: 'finger1', parameters: { pointerType: 'touch' }, actions: [
        { type: 'pointerMove', duration: 0, x: startX, y: startY },
        { type: 'pointerDown', button: 0 },
        { type: 'pointerMove', duration: durationMs, x: endX, y: endY },
        { type: 'pointerUp', button: 0 }
      ] }
  ]);
  await driver.releaseActions();
}

/**
 * Scroll until text is visible. Uses Android UiScrollable first, then swipes.
 */
export async function scrollToText(text: string, maxSwipes: number = 6): Promise<WebdriverIO.Element> {
  try {
    const el = await driver.$(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().textContains("${text}"))`);
    await el.waitForDisplayed({ timeout: 2000 });
    return el;
  } catch (_) {}

  for (let i = 0; i < maxSwipes; i++) {
    try {
      const el = await driver.$(`android=new UiSelector().textContains("${text}")`);
      if (await el.isDisplayed()) return el;
    } catch (_) {}
    await swipeByPercent(0.5, 0.8, 0.5, 0.3, 400);
  }
  throw new Error(`Text not found after scrolling: ${text}`);
}

/**
 * Generic waitUntil wrapper with sane defaults
 */
export async function waitUntil(
  condition: () => Promise<boolean> | boolean,
  options: { timeout?: number; interval?: number; timeoutMsg?: string } = {}
): Promise<void> {
  const { timeout = 5000, interval = 200, timeoutMsg } = options;
  await driver.waitUntil(async () => Promise.resolve(condition()), { timeout, interval, timeoutMsg });
}

type ElementOrSelector = string | WebdriverIO.Element;

function resolveElement(target: ElementOrSelector): Promise<WebdriverIO.Element> {
  if (typeof target === 'string') return driver.$(target);
  return Promise.resolve(target);
}

/**
 * Wait for element displayed (or hidden with reverse)
 */
export async function waitForDisplayed(
  target: ElementOrSelector,
  options: { timeout?: number; reverse?: boolean; interval?: number } = {}
): Promise<WebdriverIO.Element> {
  const { timeout = 5000, reverse = false, interval } = options;
  const el = await resolveElement(target);
  await el.waitForDisplayed({ timeout, reverse, interval });
  return el;
}

/**
 * Wait until element has text (exact or contains)
 */
export async function waitForText(
  target: ElementOrSelector,
  text: string,
  options: { timeout?: number; contains?: boolean; interval?: number } = {}
): Promise<WebdriverIO.Element> {
  const { timeout = 5000, contains = true, interval = 200 } = options;
  const el = await resolveElement(target);
  await waitUntil(async () => {
    try {
      const current = await el.getText();
      return contains ? current.includes(text) : current === text;
    } catch (_) {
      return false;
    }
  }, { timeout, interval, timeoutMsg: `waitForText timed out for ${text}` });
  return el;
}

/**
 * Wait then click (displayed + enabled)
 */
export async function waitAndClick(
  target: ElementOrSelector,
  options: { timeout?: number } = {}
): Promise<void> {
  const { timeout = 5000 } = options;
  const el = await waitForDisplayed(target, { timeout });
  await waitUntil(async () => {
    try { return await el.isEnabled(); } catch { return false; }
  }, { timeout, timeoutMsg: 'Element not enabled in time' });
  await el.click();
}

