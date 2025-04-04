import { test as setup, expect } from "../fixtures/fixtures.js";
import { Login } from "../test-data/staging-env/test-data.json";

setup("User login", async ({ loginTest, page }) => {
  await loginTest.LoginWithValidCredentials(Login.username, Login.password);
  await expect(page).toHaveURL(
    "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/inde"
  );
  await page.context().storageState({ path: "./.auth/user.json" });
});
