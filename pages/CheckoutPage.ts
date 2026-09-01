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
            .fill('John');

        await this.page
            .locator(checkoutLocators.lastName)
            .fill('Doe');

        await this.page
            .locator(checkoutLocators.email)
            .fill('john.doe@example.com');

        await this.page
            .locator(checkoutLocators.street)
            .fill('Main Street 10');

        await this.page
            .locator(checkoutLocators.zipcode)
            .fill('10115');

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