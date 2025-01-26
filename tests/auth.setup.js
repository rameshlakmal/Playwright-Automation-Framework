import {test as setup,expect} from "../fixtures/fixtures.js"


const authFile = './.auth/user.json';

setup('authenticate by UI', async ({ page,loginPage }) => {
  await loginPage.loginPage();
  await loginPage.Enter_Credentials_and_Click_Login_BTn('Admin','admin123');
  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");


  await page.context().storageState({ path: authFile });
});