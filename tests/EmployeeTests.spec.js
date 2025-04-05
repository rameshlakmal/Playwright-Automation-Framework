import { test, expect } from "../fixtures/fixtures.js";

test.describe("Employee Create,Update and Delete Test Cases", () => {
  test("Create Employee", async ({
    navigation,
    PimIndexPage,
    PimCreatePage,
    commonActions,
    page,
  }) => {
    const EmployeeData = await commonActions.GenerateEMPDetails();

    await navigation.NavigateToPIM();
    await PimIndexPage.ClickAddButton();
    await PimCreatePage.FillCreateEmployeeForm(EmployeeData);
    await PimCreatePage.SubmitCreateEmployeeForm();

    await expect(page.getByPlaceholder("First Name")).toHaveValue(
      EmployeeData.firstname
    );
    await expect(page.getByPlaceholder("Middle Name")).toHaveValue(
      EmployeeData.middlename
    );
    await expect(page.getByPlaceholder("Last Name")).toHaveValue(
      EmployeeData.lastname
    );
  });
});
