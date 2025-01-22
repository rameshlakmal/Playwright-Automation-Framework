export class LocatorFile {
    static get LoginPageLocators() {
      return {
        LOGIN_PAGE_LINK : '//*[@id="__next"]/main/div/div[2]/header/div[2]/div[3]/a[1]',
        ENTER_EMAIL : "//input[@placeholder='Enter your email address']",
        ENTER_PASSWORD: "//input[@placeholder='Enter your password']",
        CLICK_LOGIN_BTN: "//button[@type='submit']"
        
    };
  }


}