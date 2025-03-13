import {test,expect} from "../fixtures/fixtures.js"
import {Profile} from "../test-data/staging-env/test-data.json"






test.describe('Sample Test Cases' , () => {


    test('Test 1', async ({sampleTest,page}) => {
        await sampleTest.NavigateToSettingsPage();

        // Assert page URL and user first name
        await expect(page).toHaveURL(Profile.ProfileURL);
        await expect(page.getByPlaceholder('Your First name')).toHaveValue(Profile.name);


        await sampleTest.EditProfileDetails();

        // Assert save changes and profile details
        await expect(page.locator('div').filter({ hasText: /^Profile updated!$/ }).nth(2)).toBeVisible();




    });

})
