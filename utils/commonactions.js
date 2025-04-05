import { faker } from "@faker-js/faker";

export default class CommonAction {
  constructor(page) {
    this.page = page;
  }

  async GenerateEMPDetails() {
    return {
      firstname: faker.person.firstName(),
      middlename: faker.person.middleName(),
      lastname: faker.person.lastName(),
      empId: faker.string.numeric(4),
    };
  }

  async clickElementByText(text, index = 0) {
    await this.page.getByText(text).nth(index).click();
  }
}
