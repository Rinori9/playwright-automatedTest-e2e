import { Page } from '@playwright/test';
import { checkoutLocators } from '../locators/checkout.locators';

export class CheckoutPage {
    constructor(private page: Page) {}

    async fillCheckoutForm() {
        await this.page
            .locator(checkoutLocators.salutation)
            .selectOption({ label: 'Mr.' });

        await this.page
            .locator(checkoutLocators.firstName)
            .fill('Rinor');

        await this.page
            .locator(checkoutLocators.lastName)
            .fill('Halitaj');

        await this.page
            .locator(checkoutLocators.email)
            .fill('rinor05@gmail.com');

        await this.page
            .locator(checkoutLocators.street)
            .fill('Sahit Halitaj 35');

        await this.page
            .locator(checkoutLocators.zipcode)
            .fill('24000');

        await this.page
            .locator(checkoutLocators.city)
            .fill('Berlin');

        await this.page
            .locator(checkoutLocators.country)
            .selectOption({ label: 'Germany' });

        await this.page
            .locator(checkoutLocators.state)
            .selectOption({ label: 'Berlin' });
    }

    async clickNext() {
        await this.page
            .locator(checkoutLocators.nextButton)
            .click();
    }
    async placeOrder() {
    await this.page
        .locator(checkoutLocators.orderButton)
        .click();
}
}