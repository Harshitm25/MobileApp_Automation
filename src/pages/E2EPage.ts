import { driver } from '@wdio/globals';
import { E2EPageLocators } from './E2EpageLocators';
import { waitForDisplayed, waitAndClick, longPress, swipeByPercent, scrollToText } from '../utils/helpers';

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
}

// Singleton export
export const e2ePage = new E2EPage();
