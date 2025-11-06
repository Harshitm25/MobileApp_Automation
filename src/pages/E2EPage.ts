import { driver } from '@wdio/globals';
import { E2EPageLocators } from './E2EpageLocators';
import { waitForDisplayed, waitAndClick, longPress, swipeByPercent, scrollToText ,tap} from '../utils/helpers';
import { promises } from 'dns';

export class E2EPage {
  async selectStandardUser(): Promise<void> {
    await waitForDisplayed(E2EPageLocators.standardUserText, { timeout: 15000 });
    const user = await driver.$(E2EPageLocators.standardUserText);
    await user.click();
  }

  async tapLogin(): Promise<void> {
    await waitAndClick(E2EPageLocators.loginButton, { timeout: 10000 });
  }

  async openProductByName(name: string): Promise<void> {
    const selector = E2EPageLocators.productTitleByText(name);
    await waitForDisplayed(selector, { timeout: 10000 });
    const product = await driver.$(selector);
    await product.click();
  }

  async isProductVisible(name: string): Promise<boolean> {
    const selector = E2EPageLocators.productTitleByText(name);
    try {
      const el = await driver.$(selector);
      return await el.isDisplayed();
    } catch {
      return false;
    }
  }

  async openFilterLongPress(): Promise<void> {
    await waitForDisplayed(E2EPageLocators.modalSelectorButton, { timeout: 5000 });
    const element=await driver.$(E2EPageLocators.modalSelectorButton);
    await element.saveScreenshot('./screenshots/modal-selector-button.png'); //screenshot of the element
    await longPress(E2EPageLocators.modalSelectorButton, 1200);
  }

  async cancelModal(): Promise<void> {
    await waitForDisplayed(E2EPageLocators.cancelText, { timeout: 5000 });
    const cancel = await driver.$(E2EPageLocators.cancelText);
    await cancel.click();
  }

  async swipeDown(): Promise<void> {
    await swipeByPercent(0.5, 0.8, 0.5, 0.3, 500);
  }

  async swipeUp(): Promise<void> {
    await swipeByPercent(0.5, 0.3, 0.5, 0.8, 500);
  }

  async scrollToAndOpen(text: string): Promise<void> {
    const el = await scrollToText(text);
    await el.click();
  }

  async homePageValidation(): Promise<void> {
    await waitForDisplayed(E2EPageLocators.homePageValidation, { timeout: 5000 });
  }


async OptionsPage(): Promise<void> 
{
  const option =await driver.$(E2EPageLocators.optionsButton);
  await option.click();
}

async AboutPage(): Promise<void> {
  // const x=160;
  // const y=1216;
  const about= await driver.$(E2EPageLocators.aboutPage)  
  await about.click();
}

async dismissHomePageBottomSheet(): Promise<void> {
  if(await driver.isElementDisplayed(E2EPageLocators.dismissHomePageBottomSheetButton)) {
    await waitForDisplayed(E2EPageLocators.dismissHomePageBottomSheetButton, { timeout: 5000 });
    const dismissButton = await driver.$(E2EPageLocators.dismissHomePageBottomSheetButton);
    await dismissButton.saveScreenshot('./screenshots/dismiss-home-page-bottom-sheet-button.png'); //screenshot of the element
    await dismissButton.click();
  }
}

async cardScreenValidation(): Promise<void> {
  await waitForDisplayed(E2EPageLocators.cardScreenValidation, { timeout: 5000 });
  const cardScreen = await driver.$(E2EPageLocators.cardScreenValidation);
  await cardScreen.click();
}

async getCreditCardHeaderText(): Promise<string> {
  await waitForDisplayed(E2EPageLocators.creditCardHeaderText, { timeout: 5000 });
  return await driver.$(E2EPageLocators.creditCardHeaderText).getText();
}

async fDValidation(): Promise<void> {
  await waitForDisplayed(E2EPageLocators.fDValidation, { timeout: 5000 });
  const fD = await driver.$(E2EPageLocators.fDValidation);
  await fD.click();
}

async getFDHeaderText(): Promise<string> {  
  await waitForDisplayed(E2EPageLocators.fdHeaderText,{timeout: 5000});
  return await driver.$(E2EPageLocators.fdHeaderText).getText();

}


async rewardsValidation():Promise<void>{
  await waitForDisplayed(E2EPageLocators.rewardsValidation, { timeout: 5000 });
  const rewards = await driver.$(E2EPageLocators.rewardsValidation);
  await rewards.click(); 
}

async getRewardText():Promise<string>{
  await waitForDisplayed(E2EPageLocators.rewardHeaderText,{timeout:5000});
  return await driver.$(E2EPageLocators.rewardHeaderText).getText();
}

async historyValidation():Promise<void>{
  await waitForDisplayed(E2EPageLocators.historyValidation,{timeout:5000});
  const history=await driver.$(E2EPageLocators.historyValidation)
  await history.click();
}

async getHistoryText():Promise<string>{
  await waitForDisplayed(E2EPageLocators.historyHeaderText,{timeout:5000});
  return (await driver.$(E2EPageLocators.historyHeaderText)).getText();
}

// async sendMoney(): Promise<void>{
//   await driver.execute('mobile: tap', { x: 121, y: 420 });
//   await waitForDisplayed(E2EPageLocators.SearchBox,{timeout:5000});
//   const searchInput = await driver.$(E2EPageLocators.SearchBox);
//   await searchInput.setValue('9798244373');
//   const senderName= await driver.$(E2EPageLocators.senderName);
//   await senderName.click();

// }

}
// Singleton export
export const e2ePage = new E2EPage();
