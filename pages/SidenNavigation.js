import { LocatorManager } from "../locators/LocatorManager.js";

export default class Navigation {
  constructor(page) {
    this.page = page; // Use Playwright's page object directly
  }

  async NavigateToPIM() {
    await this.page.pause();

    await this.page.goto(
      "https://opensource-demo.orangehrmlive.com/web/dashboard/index"
    );
    await this.page.getByRole("link", { name: "PIM" }).click();
  }
}
