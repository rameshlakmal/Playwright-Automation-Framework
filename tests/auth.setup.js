import {test as setup,expect} from "../fixtures/fixtures.js"


const authFile = './.auth/user.json';

setup('authenticate by UI', async ({ page,loginPage,commonActions }) => {
  await loginPage.loginPage();
  await commonActions.click('//*[@id="__next"]/main/div/div[2]/header/div[2]/div[3]/a[1]')
  await loginPage.Enter_Credentials_and_Click_Login_BTn('lakmal@mailinator.com','123456');
  await expect(page.locator('xpath = //*[@id="__next"]/main/div/div[2]/header/div[2]/div[3]/div[1]/a')).toBeVisible();    


  await page.context().storageState({ path: authFile });
});