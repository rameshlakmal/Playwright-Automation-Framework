import {test as base} from "@playwright/test";
import CommonAction from "../utils/commonactions";
import LoginPage from "../pages/loginpage";
import EmployeePage from "../pages/employeepage";
import { LocatorFile } from "../locators/locators";

export const test = base.extend({

    
    loginPage: async({page},use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },


    employeePage: async({page},use) => {
        const employeePage = new EmployeePage(page);
        await use(employeePage);
    },

    commonActions: async({page},use) =>{
        const commonActions = new CommonAction(page);
        await use(commonActions);
    },

    locators: async({},use) =>{
        const locators = {
            ...LocatorFile.
            LoginPageLocators,
            EmployeePageLocators  // Access the locators

        }
        await use(locators);
    },

});

export const expect = base.expect;