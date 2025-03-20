import {test,expect} from "../fixtures/fixtures.js"


test.describe('Purchaseing Test Cases' , () => {

    test('Subscribe to a Platform Monthly Sub', async ({Paymentmethods,pricePage,page,Purchesespage}) => {
        await pricePage.NavigateToPricingpage();
        await expect(page).toHaveURL('https://staging.analystbuilder.com/pricing');
        await pricePage.SubToPlatformMonthlySub();
        await Paymentmethods.Cardpayment();

        // Verify the payment success page
        await expect(page.locator('[id="__next"]')).toMatchAriaSnapshot(`
            - img
            - text: Payment Success Your payment was successful. A receipt for this purchase has been sent to your email.
            - link "Visit Dashboard":
              - button "Visit Dashboard"
            `);

        await Purchesespage.NavigateToPurchsesPage();

        // Verify the active status of the subscription
        await expect(page.locator('[id="__next"]')).toContainText('Active');

    });

})
