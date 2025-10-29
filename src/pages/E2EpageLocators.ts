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
}
