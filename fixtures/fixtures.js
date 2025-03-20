import {test as base} from "@playwright/test";
import CommonAction from "../utils/commonactions";
import SampleTest from "../pages/SampleTest";
import PricePage from "../pages/PricingPage";
import PaymentMethods from "../pages/PaymentMethods";
import PurchesesPage from "../pages/PurchesesPage";
import { LocatorFile } from "../locators/locators";

export const test = base.extend({

    
    sampleTest: async({page},use) => {
        const sampleTest = new SampleTest(page);
        await use(sampleTest);
    },

    pricePage: async({page},use) => {
        const pricePage = new PricePage(page);
        await use(pricePage);
    },

    Paymentmethods: async({page},use) => {
        const Paymentmethods = new PaymentMethods(page);
        await use(Paymentmethods);
    },
    
    Purchesespage: async({page},use) => {
        const Purchesespage = new PurchesesPage(page);
        await use(Purchesespage);
    },

    commonActions: async({page},use) =>{
        const commonActions = new CommonAction(page);
        await use(commonActions);
    },

    locators: async({},use) =>{
        const locators = {
            ...LocatorFile.
            LoginPageLocators,
            Navigationbarlocators,
            StripePortalLocators

        }
        await use(locators);
    },

});

export const expect = base.expect;