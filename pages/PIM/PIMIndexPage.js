
import { LocatorManager } from '../../locators/LocatorManager.js';

export default class PIMIndexPage {
  constructor(page) {
    this.page = page;
    this.locators = LocatorManager.PIMLocators; // PIMLocators now includes addButton

  }

  async clickAddButton() { // Renamed method
    await this.page.locator(this.locators.addButton).click();
  }

  async SearchEmployeeByName(EmpName) {
    await this.page.getByPlaceholder("Type for hints...").first().fill(EmpName);
    await this.page.getByRole("button", { name: "Search" }).click();
  }

  async SelectEmployeeRowByName(firstname) {
    const row = this.page
      .locator(this.locator.EmpRow_Class, {
        hasText: firstname,
      })
      .first();
    await row.click();
  }
}
