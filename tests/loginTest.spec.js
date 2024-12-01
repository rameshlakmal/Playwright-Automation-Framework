import { assert } from "console";
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

    {
        email: "",
        password: ""
    },
]




test.describe('Login form test cases' , () => {

    test.beforeEach(async ({loginPage}) => {
        await loginPage.loginPage();
    })


    loginData.forEach((data,index) => {
        test(`Login Test ${index + 1} - Login with email: ${data.email}`, async ({loginPage}) => {
            await loginPage.Enter_Credentials_and_Click_Login_BTn(data.email,data.password);
            await loginPage.assertErrorMessage("//span[normalize-space()='Email is required!']", "Password is req")
        });
    });

    test.afterEach(async ({page}) => {
        await page.close()
    });
})
