import { driver } from '@wdio/globals';
import { tap, longPress, swipeByPercent, scrollToText, waitForDisplayed, waitAndClick } from '../utils/helpers';

describe('Login selection - simple flow', () => {
  it('launches, scrolls down, and taps standard_user', async () => {
    // Wait for app to launch by waiting for any known element
    await waitForDisplayed('//android.widget.TextView[@text="standard_user"]', { timeout: 15000 });

    const standardUser = await driver.$('//android.widget.TextView[@text="standard_user"]');
    await standardUser.click();
    await waitAndClick('~test-LOGIN', { timeout: 10000 });
    // Tap product
    await tap("//*[@content-desc='test-Item title' and @text='Sauce Labs Backpack']");
    await driver.back();
    await waitForDisplayed("//*[@content-desc='test-Item title' and @text='Sauce Labs Backpack']", { timeout: 5000 });
     
    // Swipe down to see more products
    await swipeByPercent(0.5, 0.8, 0.5, 0.3, 500);
    await waitForDisplayed('~test-Modal Selector Button', { timeout: 5000 });

    //  Long press filter icon 
    await longPress('~test-Modal Selector Button', 1200);
    await waitForDisplayed('//*[@text="Cancel"]', { timeout: 5000 });
    await driver.$('//*[@text="Cancel"]').click();
    await waitForDisplayed("//*[@content-desc='test-Item title' and @text='Sauce Labs Onesie']", { timeout: 10000 });

    // Swipe up to see more products
    await swipeByPercent(0.5, 0.3, 0.5, 0.8, 500);
    await driver.pause(3000);
    
    //  Scroll until text appears 
    const fleece = await scrollToText('Sauce Labs Onesie');
    await fleece.click();
    await driver.pause(3000);
    await driver.back();
  });
});

