export default class PIMUpdatePage {
  constructor(page) {
    this.page = page; // Use Playwright's page object directly
    // this.locatorManager = new LocatorManager(page); // Initialize LocatorManager with the page object
  }

  async UpdateEmployeeProfilePic() {
    await this.page
      .getByRole("img", { name: "profile picture" })
      .nth(1)
      .click();
    await this.page
      .locator("form")
      .getByRole("img", { name: "profile picture" })
      .setInputFiles(path.join("C:/Users/rames/Desktop/pl/", "sd.jpg"));
  }
}
