import {test,expect} from "../fixtures/fixtures.js"

const loginData = [
    {
        email: "lakmal@mailinator.com",
        password: "123456"
    },

    {
        email: "lakmali@mailinator.com",
        password: "123456"
    },
]




test.describe('Login form test cases' , () => {

    test.beforeEach(async ({loginPage}) => {
        await loginPage.loginPage();
    })


    loginData.forEach((data,index) => {
        test(`Login Test ${index + 1} - Login with email: ${data.email}`, async ({loginPage,page}) => {
            await loginPage.loginPage();
        });
    });

    test.afterEach(async ({page}) => {
        await page.close()
    });
})
