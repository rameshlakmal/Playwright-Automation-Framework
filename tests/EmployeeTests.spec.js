import { test, expect } from "../fixtures/fixtures.js";
import { faker } from "@faker-js/faker";

test.describe("Employee Create,Update and Delete Test Cases", () => {
  let EmployeeData;
  test.beforeAll(async () => {
    EmployeeData = {
      firstname: faker.person.firstName(),
      middlename: faker.person.middleName(),
      lastname: faker.person.lastName(),
      empId: faker.string.numeric(4),
    };
  });

  test("Create Employee", async ({
    navigation,
    PimIndexPage,
    PimCreatePage,
    page,
  }) => {
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

  test("Update Employee", async ({
    navigation,
    PimIndexPage,
    PimUpdatePage,
  }) => {
    await navigation.NavigateToPIM();
    // await PimIndexPage.SearchEmployeeByName(EmployeeData.firstname);
    // await PimIndexPage.SelectEmployeeRowByName(EmployeeData.firstname);
    await PimIndexPage.SearchEmployeeByName("Amelia");
    await PimIndexPage.SelectEmployeeRowByName("Amelia");
    await PimUpdatePage.UpdateEmployeeProfilePic();
  });
});
