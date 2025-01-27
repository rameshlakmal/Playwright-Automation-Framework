import {test,expect} from "../fixtures/fixtures.js"





test.describe('Employee test cases' , () => {

    test.beforeEach(async ({loginPage}) => {
        await loginPage.loginPage();
    })

        test('Verify that user can create an employee', async ({employeePage,page}) => {
                
            await employeePage.Navigate_to_emp_index()
            await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList");      
            await employeePage.Navigate_to_emp_create()
            await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee");      
            await employeePage.Create_emp('Lehan','Tharuka')
        });

})
