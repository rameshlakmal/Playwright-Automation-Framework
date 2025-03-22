import { LocatorFile } from "../locators/locators";
import {Common} from "../test-data/staging-env/test-data.json"


export default class LoginTest {
    constructor(page) {
        this.page = page; // Use Playwright's page object directly
        this.locators = LocatorFile.LoginPageLocators;
    }


    async LoginWithValidCredentials(email, password){
        await this.page.goto(Common.URL)
        await this.page.getByRole('link', { name: 'Login' }).click()
        await this.page.getByPlaceholder(this.locators.UN_PH).fill(email);
        await this.page.getByPlaceholder(this.locators.PW_PH).fill(password);
        await this.page.getByRole('button', { name: 'Login' }).click();
    }
}
