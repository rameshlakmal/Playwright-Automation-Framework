import {test as setup,expect} from "../fixtures/fixtures.js"


const authFile = './.auth/user.json';

setup('authenticate by UI', async ({ page,loginPage }) => {
  await loginPage.LoginWithValidCredentials('dilshi@mailinator.com','123456');
  await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
  await page.context().storageState({ path: "./auth/user.json" });
});