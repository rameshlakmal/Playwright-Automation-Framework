export default class LoginTest {
  constructor(page) {
    this.page = page; // Use Playwright's page object directly
  }

  async LoginWithValidCredentials(username, password) {
    await this.page.goto("auth/login");
    await this.page.getByRole("textbox", { name: "Username" }).fill(username);
    await this.page.getByRole("textbox", { name: "Password" }).fill(password);
    await this.page.getByRole("button", { name: "Login" }).click();
  }
}
