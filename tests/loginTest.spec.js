import { assert } from "console";
import {test,expect} from "../fixtures/fixtures.js"





test.describe('Login form test cases' , () => {

    test.beforeEach(async ({loginPage}) => {
        await loginPage.loginPage();
    })

        test('Test 1', async ({commonActions,page}) => {
                
            await commonActions.click('//a[normalize-space()="Explore Courses"]')
            await expect(page).toHaveURL("https://staging.analystbuilder.com/courses");           
        });

        test('Test 2', async ({page,commonActions}) => {
            await commonActions.click("//a[normalize-space()='Explore Questions']")
            await expect(page).toHaveURL("https://staging.analystbuilder.com/question");           
        });


        // test('Test 2', async ({commonActions,page}) => {
            
        //     await commonActions.click('')

        //     await expect(page).toHaveURL("https://staging.analystbuilder.com/courses");            
        // });



        // test('Test 3', async ({page}) => {
            
        //     await page.getByRole('link', { name: 'Pricing' }).click();

        //     await expect(page).toHaveURL("https://staging.analystbuilder.com/pricing");                   
        // });
   

    test.afterEach(async ({commonActions}) => {
        await commonActions.navigate('https://staging.analystbuilder.com/')
        // await expect(page.locator('xpath = //*[@id="__next"]/main/div/div[2]/header/div[2]/div[3]/div[1]/a')).toBeVisible();    

    });
})
