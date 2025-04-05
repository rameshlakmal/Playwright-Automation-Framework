export default class PIMCreatePage {
  constructor(page) {
    this.page = page; // Use Playwright's page object directly
    // this.locatorManager = new LocatorManager(page); // Initialize LocatorManager with the page object
  }

  async FillCreateEmployeeForm({ firstname, middlename, lastname, empId }) {
    await this.page.getByPlaceholder("First Name").fill(firstname);
    await this.page.getByPlaceholder("Middle Name").fill(middlename);
    await this.page.getByPlaceholder("Last Name").fill(lastname);
    await this.page.locator("form").getByRole("textbox").nth(4).fill(empId);
  }

  async SubmitCreateEmployeeForm() {
    await this.page.getByRole("button", { name: "Save" }).click();
  }
}
