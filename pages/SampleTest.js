import CommonAction from "../utils/commonactions";
import { LocatorFile } from "../locators/locators";
import {Login,Profile} from "../test-data/staging-env/test-data.json"


export default class SampleTest {
    constructor(page) {
        this.actions = new CommonAction(page)
        this.locators = LocatorFile.LoginPageLocators;
    }


    async LoginWithValidCredentials(email, password){
        await this.actions.navigate(Login.URL)
        await this.actions.clickByRole('link','Login')
        await this.actions.fillInputByPlaceholder(this.locators.UN_PH, email)
        await this.actions.fillInputByPlaceholder(this.locators.PW_PH, password)
        await this.actions.clickByRole('button','Login')
    }

    async NavigateToSettingsPage(){
        await this.actions.navigate(Login.URL)
        await this.actions.clickByRole('button','Ramesh')
        await this.actions.clickByRole('link','Settings')
    }

    async EditProfileDetails(){
        await this.actions.fillInputByPlaceholder('Your First name',Profile.NewFirstName)
        await this.actions.fillInputByPlaceholder('Your Last name',Profile.NewLastName)
        await this.actions.fillInputByPlaceholder('Live in',Profile.NewLocation)
        await this.actions.fillInputByPlaceholder('About you',Profile.NewBio)
        await this.actions.clickByRole('button','Save Changes')
    }

    

}
