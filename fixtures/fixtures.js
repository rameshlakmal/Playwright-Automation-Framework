import { test as base } from "@playwright/test";
import CommonAction from "../utils/commonactions";
import LoginTest from "../pages/LoginPage";
import Navigation from "../pages/SidenNavigation";
import PIMIndexPage from "../pages/PIM/PIMIndexPage";
import PIMCreatePage from "../pages/PIM/PIMCreatePage";
import PIMUpdatePage from "../pages/PIM/PIMUpdatePage";

export const test = base.extend({
  loginTest: async ({ page }, use) => {
    const loginTest = new LoginTest(page);
    await use(loginTest);
  },

  navigation: async ({ page }, use) => {
    const navigation = new Navigation(page);
    await use(navigation);
  },

  PimIndexPage: async ({ page }, use) => {
    const PimIndexPage = new PIMIndexPage(page);
    await use(PimIndexPage);
  },

  PimCreatePage: async ({ page }, use) => {
    const PimCreatePage = new PIMCreatePage(page);
    await use(PimCreatePage);
  },

  PimUpdatePage: async ({ page }, use) => {
    const PimUpdatePage = new PIMUpdatePage(page);
    await use(PimUpdatePage);
  },

  commonActions: async ({ page }, use) => {
    const commonActions = new CommonAction(page);
    await use(commonActions);
  },
});

export const expect = base.expect;
