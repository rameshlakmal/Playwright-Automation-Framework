export default class PurchesesPage {
  constructor(page) {
    this.page = page; // Use Playwright's page object directly
  }

  async NavigateToPurchsesPage() {
    await this.page.goto("/");
    await this.page
      .locator(
        "xpath=(//div[@class='flex size-9 cursor-pointer flex-row items-center justify-end gap-2 md:size-full'])[2]"
      )
      .click();
    await this.page.getByRole("link", { name: "Purchases" }).click();
  }
}
