import { driver } from '@wdio/globals';

export class E2EPageLocators {
  static get standardUserText(): string {
    return driver.isAndroid
      ? '//android.widget.TextView[@text="standard_user"]'
      : '//XCUIElementTypeStaticText[@name="standard_user"]';
  }

  static get loginButton(): string {
    return '~test-LOGIN';
  }

  static productTitleByText(name: string): string {
    return driver.isAndroid
      ? `//*[@content-desc='test-Item title' and @text='${name}']`
      : `//*[@name='${name}' or @label='${name}']`;
  }

  static get modalSelectorButton(): string {
    return '~test-Modal Selector Button';
  }

  static get cancelText(): string {
    return driver.isAndroid
      ? '//*[@text="Cancel"]'
      : '//*[@name="Cancel"]';
  }

  static get homePageValidation(): string{
    return driver.isAndroid
      ? '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.ImageView[2]'
      : '//XCUIElementTypeImage[@name="test-Logo"]';
  }

  static get optionsButton(): string{
    return driver.isAndroid
      ? '//android.view.ViewGroup[@content-desc="test-Menu"]/android.view.ViewGroup/android.widget.ImageView'
      : '//XCUIElementTypeStaticText[@name="test-Options"]';
  }

  static get aboutPage(): string{
    return driver.isAndroid
    ? '//android.widget.TextView[@content-desc="test-Item title" and @text="Sauce Labs Backpack"]'
      : '//XCUIElementTypeStaticText[@name="test-Options"]';

  }
}
