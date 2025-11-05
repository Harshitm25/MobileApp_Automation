import { driver, expect } from '@wdio/globals';
// import { e2ePage } from '../pages/E2EPage';

// describe('Login selection - simple flow', () => {

//   before(async ()=>{
//     await e2ePage.selectStandardUser();
//     await e2ePage.tapLogin();
//   })
 
//   it('launches, logs in, navigates products, and validates UI', async () => {
//     // user selection and login
  
//     // open product and validate visibility
//     await e2ePage.homePageValidation();
//     await e2ePage.openProductByName('Sauce Labs Backpack');
//     await driver.back();
//     await expect(await e2ePage.isProductVisible('Sauce Labs Backpack')).toBe(true);
//     // Save a screenshot of the entire app screen
//     await driver.saveScreenshot('./screenshots/fullscreen.png');
//     // filter modal interactions
//     await e2ePage.swipeDown();
//     await e2ePage.openFilterLongPress();
//     await e2ePage.cancelModal();

//     // scroll and open another product
//     await expect(await e2ePage.isProductVisible('Sauce Labs Onesie')).toBe(true);
//     await e2ePage.swipeUp();
//     await e2ePage.scrollToAndOpen('Sauce Labs Onesie');



//     await driver.back();
//   });

//   it("should open about page and switch context webview", async () =>{
//     await e2ePage.homePageValidation();
//     await e2ePage.OptionsPage();
//     const context = await driver.getContext();
//     console.log("Current context: " + context);
//     await e2ePage.AboutPage();
//     await driver.pause(5000);
//     const contexts = await driver.getContexts();
//     console.log("all contexts",contexts);
//   });
// });

describe('Basic app lifecycle', () => {
  it('should activate app, pause, then terminate', async () => {
    const bundleId = 'money.super.payments';
    await driver.activateApp(bundleId);
    await driver.pause(20000);
    await driver.terminateApp(bundleId, { timeout: 5000 });
  });
});
