import {test,expect} from "../fixtures/fixtures.js"


test.describe('Login form test cases' , () => {
    test.afterEach(async ({page}) => {
        await page.close()
    })

    test('Test 1', async ({loginPage,page}) => {
        await loginPage.loginPage();
        // await loginPage.login('gihaan@mailinator.com','Mangotree@1999')
        // await page.waitForURL('https://practicesoftwaretesting.com/account');
        // await loginPage.assertCurrentURL('https://practicesoftwaretesting.com/account')
    })

    test('Test 2', async ({loginPage,page}) => {
        await loginPage.loginPage();
        // await loginPage.login('gihaan@mailinator.com','Mangotree@1999')
        // await page.waitForURL('https://practicesoftwaretesting.com/account');
        // await loginPage.assertCurrentURL('https://practicesoftwaretesting.com/account')
    })

    test('Test 3', async ({loginPage,page}) => {
        await loginPage.loginPage();
        // await loginPage.login('gihaan@mailinator.com','Mangotree@1999')
        // await page.waitForURL('https://practicesoftwaretesting.com/account');
        // await loginPage.assertCurrentURL('https://practicesoftwaretesting.com/account')
    })

    test('Test 4', async ({loginPage,page}) => {
        await loginPage.loginPage();
        // await loginPage.login('gihaan@mailinator.com','Mangotree@1999')
        // await page.waitForURL('https://practicesoftwaretesting.com/account');
        // await loginPage.assertCurrentURL('https://practicesoftwaretesting.com/account')
    })



})
