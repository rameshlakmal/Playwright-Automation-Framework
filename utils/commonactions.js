import { selectors } from "@playwright/test";

export default class CommonAction{
    constructor(page){
        this.page = page;
        
    }

    async navigate(url){
        // await this.page.pause()
        await this.page.goto(url)
    }

    async click(selector){
        await this.page.click(selector)
    }



    // Fill input fields using placeholder as a locator
    async fillInputByPlaceholder(placeholder, text){ 
        await this.page.getByPlaceholder(placeholder).fill(text)
    }

    // Click elements using role

    async clickByRole(role, name) { 
        await this.page.getByRole(role, { name }).click();
    }

    // async clickByRole(role, name, timeout = 5000) { 
    //     try {
    //         await this.page.getByRole(role, { name }).click({ timeout });
    //     } catch (error) {
    //         throw new Error(`Failed to click on element with role '${role}' and name '${name}': ${error.message}`);
    //     }
    // }
    


    async type(selector,text){
        await this.page.type(selector,text)
    }

    async getText(selector){
        return await this.page.textContent(selector)
    }

    async check(selector){
        return await this.page.check(selector)
    }

    async selectDropdown(selector, value){
        await this.page.selectOption(selector, value);
    }

    async getCurrentUrl() {
        return await this.page.url();
    }

}