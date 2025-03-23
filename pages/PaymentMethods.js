import { LocatorManager } from "../locators/LocatorManager.js";
import { CardDetails } from "../test-data/staging-env/test-data.json";

export default class PaymentMethods {
  constructor(page) {
    this.page = page; // Use Playwright's page object directly
    this.locators = LocatorManager.StripePortalLocators;
  }

  async Cardpayment() {
    await this.page.click(this.locators.CardOption);
    await this.page
      .getByPlaceholder("1234 1234 1234")
      .fill(CardDetails.CardNumber);
    await this.page.getByPlaceholder("MM / YY").fill(CardDetails.ExpDate);
    await this.page.getByPlaceholder("CVC").fill(CardDetails.CVC);
    await this.page
      .getByPlaceholder("Full name on card")
      .fill(CardDetails.CardHolderName);
    await this.page
      .getByPlaceholder("Address line 1")
      .fill(CardDetails.AddressLine1);
    await this.page
      .getByPlaceholder("Address line 2")
      .fill(CardDetails.AddressLine2);
    await this.page.getByPlaceholder("City").fill(CardDetails.City);
    await this.page
      .getByPlaceholder("Postal code")
      .fill(CardDetails.PostalCode);
    await this.page.waitForTimeout(5000);
    await this.page
      .getByTestId("hosted-payment-submit-button")
      .waitFor({ state: "visible" });
    await this.page.click(this.locators.Subscribe);
    await this.page.waitForNavigation();
  }
}
