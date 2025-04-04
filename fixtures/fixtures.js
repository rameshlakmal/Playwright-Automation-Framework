import { test as base } from "@playwright/test";
// import CommonAction from "../utils/commonactions";
import LoginTest from "../pages/LoginTest";

export const test = base.extend({
  loginTest: async ({ page }, use) => {
    const loginTest = new LoginTest(page);
    await use(loginTest);
  },

  // commonActions: async ({ page }, use) => {
  //   const commonActions = new CommonAction(page);
  //   await use(commonActions);
  // },
});

export const expect = base.expect;
