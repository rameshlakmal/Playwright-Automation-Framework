import { LocatorManager } from "../locators/LocatorManager.js"; // Path is correct

export default class SideNavigationBar {
  // Renamed class
  constructor(page) {
    this.page = page;
    this.locators = LocatorManager.SideNavigationLocators;
  }

  async navigateToPIM() {
    await this.page.goto(
      "https://opensource-demo.orangehrmlive.com/web/dashboard/index"
    );
    await this.page.getByRole("link", { name: "PIM" }).click();
  }
}
