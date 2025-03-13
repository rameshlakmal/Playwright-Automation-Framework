import {test as base} from "@playwright/test";
import CommonAction from "../utils/commonactions";
import SampleTest from "../pages/SampleTest";
import { LocatorFile } from "../locators/locators";

export const test = base.extend({

    
    sampleTest: async({page},use) => {
        const sampleTest = new SampleTest(page);
        await use(sampleTest);
    },

    commonActions: async({page},use) =>{
        const commonActions = new CommonAction(page);
        await use(commonActions);
    },

    locators: async({},use) =>{
        const locators = {
            ...LocatorFile.
            LoginPageLocators,

        }
        await use(locators);
    },

});

export const expect = base.expect;