import CommonAction from "../utils/commonactions";
import { LocatorFile } from "../locators/locators";
import {Common} from "../test-data/staging-env/test-data.json"



export default class PricePage {

    constructor(page) {
        this.page = page; // Use Playwright's page object directly
        this.actions = new CommonAction(page); // Initialize CommonAction
        this.locators = LocatorFile.Navigationbarlocators;
    }


    async NavigateToPricingpage(){
        await this.page.goto(Common.URL)
        await this.page.click(this.locators.Pricing)
    }

    async SubToPlatformMonthlySub(){
        await this.actions.clickElementByText('Subscribe', 1)
        await this.page.waitForNavigation({ waitUntil: 'domcontentloaded' });
    }
}
