import CommonAction from "../utils/commonactions";
import { LocatorManager } from "../locators/LocatorManager.js";

export default class PricePage {
  constructor(page) {
    this.page = page; // Use Playwright's page object directly
    this.actions = new CommonAction(page); // Initialize CommonAction
    this.locators = LocatorManager.NavigationBarLocators;
  }

  async NavigateToPricingpage() {
    await this.page.goto("/");
    // await this.page.click(this.locators.Pricing);
    await this.page
      .locator("header")
      .getByRole("link", { name: "Pricing" })
      .click();
  }

  async SubToPlatformMonthlySub() {
    await this.actions.clickElementByText("Subscribe", 1);
    await this.page.waitForNavigation({ waitUntil: "domcontentloaded" });
  }
}
