import { driver, expect } from '@wdio/globals';
import { e2ePage } from '../pages/E2EPage';
import { scrollToText } from '../utils/helpers';

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

describe('super money iOS End to End flow', () => {
  it('Automating Nav bars and validating heading ', async () => {
    await e2ePage.cardScreenValidation();
    const creditCardHeaderText = await e2ePage.getCreditCardHeaderText();
    console.log("Credit Card Header Text: " + creditCardHeaderText);
    expect(creditCardHeaderText).toBe('superCard');
    
    //FD
    await e2ePage.fDValidation();
    const fdHeaderText= await e2ePage.getFDHeaderText();
    console.log("Fixed deposit Header Text: " + fdHeaderText);
    expect(fdHeaderText).toBe('superFD');

    // rewards
    await e2ePage.rewardsValidation();
    const rewardsHeaderText= await e2ePage.getRewardText();
    console.log("Rewards Header Text: " + rewardsHeaderText);
    expect(rewardsHeaderText).toBe('superRewards');

    //history
    await e2ePage.historyValidation();
    const historyHeaderText=await e2ePage.getHistoryText();
    console.log("Rewards Header Text: " + historyHeaderText);
    expect(historyHeaderText).toBe('Payment history');

  });

  it.only('send money flow',async()=>
  {
    await driver.pause(5000);
    await e2ePage.sendMoney();
    const messageText = await e2ePage.paymentSuccessfulMessage();
    console.log("message",messageText);
    await expect(messageText).toContain("Paid to");

    await driver.execute('mobile: scroll', { direction: 'down', name: 'Done' });
    const doneButton = await e2ePage.doneButton();
    await doneButton.click();

    await driver.pause(5000);
  })
});
