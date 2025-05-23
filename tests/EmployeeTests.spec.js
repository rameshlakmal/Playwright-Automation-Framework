import { test, expect } from "../fixtures/fixtures.js";
import Logger from '../utils/Logger.js'; // Import the Logger

test.describe("Employee Create,Update and Delete Test Cases", () => {
  test("Create Employee", async ({
    navigation,
    PimIndexPage,
    PimCreatePage,
    commonActions,
    // page, // Removed unused 'page' fixture
  }) => {
    Logger.info("Starting test: Create Employee"); 
    const EmployeeData = await commonActions.GenerateEMPDetails();
    Logger.info(`Generated employee data: ${JSON.stringify(EmployeeData)}`);

    await navigation.navigateToPIM(); // Ensuring method name consistency from previous tasks
    await PimIndexPage.clickAddButton(); // Corrected method name
    await PimCreatePage.FillCreateEmployeeForm(EmployeeData);
    await PimCreatePage.SubmitCreateEmployeeForm();

    await expect(PimCreatePage.getFirstNameInputLocator()).toHaveValue(
      EmployeeData.firstname
    );
    await expect(PimCreatePage.getMiddleNameInputLocator()).toHaveValue(
      EmployeeData.middlename
    );
    await expect(PimCreatePage.getLastNameInputLocator()).toHaveValue(
      EmployeeData.lastname
    );
    Logger.info("Test Create Employee completed successfully.");
  });
});
