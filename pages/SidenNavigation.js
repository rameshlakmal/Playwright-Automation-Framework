import { LocatorManager } from '../locators/LocatorManager.js'; // Path is correct

export default class SideNavigationBar { // Renamed class
  constructor(page) {
    this.page = page;
    this.locators = LocatorManager.SideNavigationLocators;
  }

  async navigateToPIM() { // Renamed method
    // The initial navigation to the dashboard is a prerequisite and not a locator interaction within the component itself.
    // It can be kept here or moved to a more general 'navigateToBaseUrl' or similar if tests require starting from there.
    // For this task, we'll keep it as is, focusing on the PIM link click.
    await this.page.goto(
      "https://opensource-demo.orangehrmlive.com/web/dashboard/index"
    );
    await this.page.locator(this.locators.pimLink).click();
  }
}
