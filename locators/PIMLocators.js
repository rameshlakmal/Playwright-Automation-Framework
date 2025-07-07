export const PIMLocators = {
  // Locators for PIMCreatePage
  firstNameInput: '[placeholder="First Name"]',
  middleNameInput: '[placeholder="Middle Name"]',
  lastNameInput: '[placeholder="Last Name"]',
  employeeIdInput:
    "//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']", // Assumed resilient locator
  saveButton: 'button[type="submit"]:has-text("Save")',

  // Locators for PIMIndexPage
  addButton: 'button:has-text("Add")', // For the "Add" button on PIM index page
};
