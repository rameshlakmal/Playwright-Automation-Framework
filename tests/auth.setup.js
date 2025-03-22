import {test as setup,expect} from "../fixtures/fixtures.js"
import {Login} from "../test-data/staging-env/test-data.json"



setup('authenticate by UI', async ({ page,loginTest }) => {
  await loginTest.LoginWithValidCredentials(Login.email,Login.password);
  await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
  await page.context().storageState({ path: "./.auth/user.json" });
});