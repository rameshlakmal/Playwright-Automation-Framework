export default class CommonAction {
  constructor(page) {
    this.page = page;
  }

  // async clickByRole(role, name, timeout = 5000) {
  //     try {
  //         await this.page.getByRole(role, { name }).click({ timeout });
  //     } catch (error) {
  //         throw new Error(`Failed to click on element with role '${role}' and name '${name}': ${error.message}`);
  //     }
  // }

  async clickElementByText(text, index = 0) {
    await this.page.getByText(text).nth(index).click();
  }
}
