import { LocatorManager } from '../../locators/LocatorManager.js';

export default class PIMIndexPage {
  constructor(page) {
    this.page = page;
    this.locators = LocatorManager.PIMLocators; // PIMLocators now includes addButton
  }

  async clickAddButton() { // Renamed method
    await this.page.locator(this.locators.addButton).click();
  }
}
