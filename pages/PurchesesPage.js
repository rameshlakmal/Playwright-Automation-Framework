export default class PurchesesPage {
  constructor(page) {
    this.page = page; // Use Playwright's page object directly
  }

  async NavigateToPurchsesPage() {
    await this.page.goto("/");
    await this.page
      .locator(
        "xpath=/html[1]/body[1]/div[1]/main[1]/div[1]/div[2]/header[1]/div[2]/div[3]/div[2]/button[1]/div[1]"
      )
      .click();
    await this.page.getByRole("link", { name: "Purchases" }).click();
  }
}
