import { LocatorManager } from "../locators/LocatorManager.js";
import { MailSlurp } from "mailslurp-client";

export default class RegistrationPage {
  constructor(page) {
    this.page = page; // Use Playwright's page object directly
    this.locators = LocatorManager.RegistrationPageLocators;
  }

  async NewUserRegistration() {
    await this.page.goto("/");
    await this.page.getByRole("link", { name: "Register" }).click();
  }

  async FillRegistrationForm(username, email, password) {
    await this.page.getByPlaceholder("Enter your name").fill(username);
    await this.page.getByPlaceholder("Enter your email address").fill(email);
    await this.page.getByPlaceholder("Enter your password").fill(password);
    await this.page.getByRole("button", { name: "Register" }).click();
  }
}
