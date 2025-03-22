import { Common } from "../test-data/staging-env/test-data.json";

export default class PurchesesPage {
  constructor(page) {
    this.page = page; // Use Playwright's page object directly
  }

  async NavigateToPurchsesPage() {
    await this.page.goto(Common.URL);
    await this.page.getByRole("button", { name: "dilshi" }).click();
    await this.page.getByRole("link", { name: "Purchases" }).click();
  }
}
