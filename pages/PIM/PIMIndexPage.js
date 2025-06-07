import { LocatorManager } from "../../locators/LocatorManager.js";
export default class PIMIndexPage {
  constructor(page) {
    this.page = page; // Use Playwright's page object directly
    this.locator = LocatorManager.PIMLocators;
  }

  async ClickAddButton() {
    await this.page.getByRole("button", { name: " Add" }).click();
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
