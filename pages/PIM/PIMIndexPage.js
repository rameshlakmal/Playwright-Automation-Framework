export default class PIMIndexPage {
  constructor(page) {
    this.page = page; // Use Playwright's page object directly
    // this.locatorManager = new LocatorManager(page); // Initialize LocatorManager with the page object
  }

  async ClickAddButton() {
    await this.page.getByRole("button", { name: " Add" }).click();
  }
}
