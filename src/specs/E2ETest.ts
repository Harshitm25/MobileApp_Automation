import { driver, expect } from '@wdio/globals';
import { e2ePage } from '../pages/E2EPage';

describe('Login selection - simple flow', () => {
 
  it('launches, logs in, navigates products, and validates UI', async () => {
    // user selection and login
    await e2ePage.selectStandardUser();
    await e2ePage.tapLogin();

    // open product and validate visibility
    await e2ePage.openProductByName('Sauce Labs Backpack');
    await driver.back();
    await expect(await e2ePage.isProductVisible('Sauce Labs Backpack')).toBe(true);
    // Save a screenshot of the entire app screen
    await driver.saveScreenshot('./screenshots/fullscreen.png');
    // filter modal interactions
    await e2ePage.swipeDown();
    await e2ePage.openFilterLongPress();
    await e2ePage.cancelModal();

    
    // scroll and open another product
    await expect(await e2ePage.isProductVisible('Sauce Labs Onesie')).toBe(true);
    await e2ePage.swipeUp();
    await e2ePage.scrollToAndOpen('Sauce Labs Onesie');



    await driver.back();
  });
});
