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

  static get dismissHomePageBottomSheetButton(): string{
    return driver.isAndroid
      ? '//android.widget.Button[@content-desc="test-Dismiss"]'
      : '(//*[@name="Send Rs 1 and get up to Rs 100 Send Rs 1 to your friends or family and get up to Rs 100 cashback. Send Money now"])[8]/XCUIElementTypeOther[1]';
  }

  static get cardScreenValidation(): string{
    return driver.isAndroid
      ? '//android.widget.TextView[@content-desc="test-Item title" and @text="Sauce Labs Backpack"]'
      : '//*[@name="Card"]';
  }

  static get creditCardHeaderText(): string{
    return driver.isAndroid
      ? '//android.widget.TextView[@content-desc="test-Item title" and @text="Sauce Labs Backpack"]'
      : '(//*[@name="superCard"])[6]';
  }

  static get fDValidation(): string{
    return driver.isAndroid
      ? '//android.widget.TextView[@content-desc="test-Item title" and @text="Sauce Labs Backpack"]'
      : '~FD';
  }

  static get fdHeaderText(): string{
    return driver.isAndroid
    ? '//android.widget.TextView[@content-desc="test-Item title" and @text="Sauce Labs Backpack"]'
    : '(//*[@name="superFD"])[7]';
  }

  static get rewardsValidation(): string{
    return driver.isAndroid
    ?'android'
    : '~Rewards'
  }

  static get rewardHeaderText():string{
    return driver.isAndroid
    ?'android'
    :'(//*[@name="superRewards"])[7]'
  }

  static get historyValidation(): string{
    return driver.isAndroid
    ?'android'
    :'~History';
  }

  static get historyHeaderText(): string{
    return driver.isAndroid
    ?'android'
    :'(//*[@name="Payment history"])[7]';
  }

  static get SearchBox(): string{
    return driver.isAndroid
    ?'android'
    :'//*[@value="Number or name"]'
  }

  static get senderName(): string{
    return driver.isAndroid
    ?'android'
    :'(//XCUIElementTypeOther[@name="Aditya 9798244373 Sent ₹1 on 06 November ‘25"])[4]'
  }

}
