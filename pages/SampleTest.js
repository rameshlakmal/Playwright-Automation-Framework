import { LocatorFile } from "../locators/locators";
import {Common,Profile} from "../test-data/staging-env/test-data.json"


export default class SampleTest {
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

    async NavigateToSettingsPage(){
        await this.page.goto(Common.URL)
        await this.page.getByRole('button', { name: 'dilshi' }).click();
        await this.page.getByRole('link', { name: 'Settings' }).click();
    }

    async EditProfileDetails(){
        await this.page.getByPlaceholder('Your First name').fill(Profile.NewFirstName);
        await this.page.getByPlaceholder('Your Last name').fill(Profile.NewLastName);
        await this.page.getByPlaceholder('Live in').fill(Profile.NewLocation);
        await this.page.getByPlaceholder('About you').fill(Profile.NewBio);
        await this.page.getByRole('button', { name: 'Save Changes' }).click();
    }

    

}
