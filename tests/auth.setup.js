import MailSlurp from "mailslurp-client";
import { test as setup, expect } from "../fixtures/fixtures.js";
import { faker } from "@faker-js/faker";

setup("New User Register and Login", async ({ Registrationpage, page }) => {
  const username = faker.person.firstName();
  const password = faker.internet.password();

  const mailslurp = new MailSlurp({
    apiKey: "7cb39fd4dc1e6046c5a9091ac0c21cef7a586b8a317dcaae21dd64f98546f3e1",
  });

  const inbox = await mailslurp.createInbox();

  await Registrationpage.NewUserRegistration();
  await Registrationpage.FillRegistrationForm(
    username,
    inbox.emailAddress,
    password
  );

  await expect(
    page
      .locator("div")
      .filter({
        hasText:
          /^Registration successful! Please check your email for verification link\.$/,
      })
      .nth(2)
  ).toBeVisible();

  const email = await mailslurp.waitForLatestEmail(inbox.id, 30000);
  console.log(`Received email: ${email.subject}`);

  const match =
    /href="(https:\/\/staging\.analystbuilder\.com\/auth\/confirm-signup\?confirmation_url=[^"]+)"/.exec(
      email.body
    );
  const confirmationLink = match ? match[1] : null;

  if (!confirmationLink) {
    throw new Error("Confirmation link not found in email body.");
  }

  console.log(`Confirmation link: ${confirmationLink}`);

  await page.goto(confirmationLink);
  await page.getByRole("button", { name: "Confirm Now" }).click();
  await page.waitForURL("https://staging.analystbuilder.com/");
  await expect(page.getByRole("link", { name: "Dashboard" })).toBeVisible();
  await page.context().storageState({ path: "./.auth/user.json" });
});
