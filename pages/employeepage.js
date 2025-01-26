import { expect } from "@playwright/test";
import CommonAction from "../utils/commonactions";
import { LocatorFile } from "../locators/locators";

export default class EmployeePage {
    constructor(page) {
        this.actions = new CommonAction(page)
        this.locators = LocatorFile.EmployeePageLocators;
    }
    

    async loginPage(){
        await this.actions.navigate('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // await this.actions.click(this.locators.LOGIN_PAGE_LINK)
    }

    async Navigate_to_emp_index(){
        await this.actions.click(this.locators.CLICK_PMI_BTN)
    }

    async Navigate_to_emp_create(){
        await this.actions.click(this.locators.CLICK_NEW_BTN)
    }

    

    async getErrorMessage(xpath){
        return await this.actions.getText(xpath)
    }

    async assertErrorMessage(xpath,expectedMessage){
        const actualMessage = await this.getErrorMessage(xpath)
        expect(actualMessage).toContain(expectedMessage)
    }

    async getURL(){
        return await this.actions.getCurrentUrl()
    }

    async assertCurrentURL(verifyURL){
        const currentURL = await this.getURL()
        expect(currentURL).toContain(verifyURL)
    }

}
