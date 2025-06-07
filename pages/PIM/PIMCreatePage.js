import { LocatorManager } from '../../locators/LocatorManager.js'; // Adjusted path

export default class PIMCreatePage {
  constructor(page) {
    this.page = page;
    this.locators = LocatorManager.PIMLocators;
  }

  async FillCreateEmployeeForm({ firstname, middlename, lastname, empId }) {
    await this.page.locator(this.locators.firstNameInput).fill(firstname);
    await this.page.locator(this.locators.middleNameInput).fill(middlename);
    await this.page.locator(this.locators.lastNameInput).fill(lastname);
    await this.page.locator(this.locators.employeeIdInput).fill(empId);
  }

  async SubmitCreateEmployeeForm() {
    await this.page.locator(this.locators.saveButton).click();
  }

  // Getter methods for input field locators
  getFirstNameInputLocator() {
    return this.page.locator(this.locators.firstNameInput);
  }

  getMiddleNameInputLocator() {
    return this.page.locator(this.locators.middleNameInput);
  }

  getLastNameInputLocator() {
    return this.page.locator(this.locators.lastNameInput);
  }
}
