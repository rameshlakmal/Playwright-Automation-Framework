export class LocatorFile {
  static get LoginPageLocators() {
    return {
      ENTER_EMAIL:
        '//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input',
      ENTER_PASSWORD:
        '//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input',
      CLICK_LOGIN_BTN:
        '//*[@id="__next"]/main/div/div[2]/main/div[1]/div[2]/div[1]/div[1]/form/div[3]/button',
      LOGIN_PAGE_LINK:
        '//*[@id="__next"]/main/div/div[2]/header/div[2]/div[3]/a[1]',
      UN_PH: "Enter your email address",
      PW_PH: "Enter your password",
    };
  }
  static get Navigationbarlocators() {
    return {
      Pricing: '//*[@id="__next"]/main/div/div[2]/header/div[2]/div[2]/a[4]',
      platformMonthlySub:
        '//*[@id="headlessui-tabs-panel-:r15:"]/div/div[2]/div[2]/div/div/div[2]/a',
      CardOption:
        '//*[@id="root"]/div/div[2]/div[2]/main/div/form/div[1]/div/div/div[2]/div[1]/div[1]/div/div/div/div/div/div[1]/div/div/div',
      Subscribe:
        '//*[@id="root"]/div/div[2]/div[2]/main/div/form/div[1]/div/div/div[3]/div/div[3]/button/div[3]',
    };
  }
}
