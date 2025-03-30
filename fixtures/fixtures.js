import { test as base } from "@playwright/test";
import CommonAction from "../utils/commonactions";
import LoginTest from "../pages/LoginTest";
import PricePage from "../pages/PricingPage";
import PaymentMethods from "../pages/PaymentMethods";
import PurchesesPage from "../pages/PurchesesPage";
import RegistrationPage from "../pages/RegistrationPage";

export const test = base.extend({
  loginTest: async ({ page }, use) => {
    const loginTest = new LoginTest(page);
    await use(loginTest);
  },

  pricePage: async ({ page }, use) => {
    const pricePage = new PricePage(page);
    await use(pricePage);
  },

  Paymentmethods: async ({ page }, use) => {
    const Paymentmethods = new PaymentMethods(page);
    await use(Paymentmethods);
  },

  Purchesespage: async ({ page }, use) => {
    const Purchesespage = new PurchesesPage(page);
    await use(Purchesespage);
  },

  Registrationpage: async ({ page }, use) => {
    const Registrationpage = new RegistrationPage(page);
    await use(Registrationpage);
  },

  commonActions: async ({ page }, use) => {
    const commonActions = new CommonAction(page);
    await use(commonActions);
  },
});

export const expect = base.expect;
