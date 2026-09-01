import { Page } from '@playwright/test';
import { cartLocators } from '../locators/cart.locators';

export class CartPage {
    constructor(private page: Page) {}

    async openCart() {
        await this.page
            .locator(cartLocators.viewCartButton)
            .click();
    }

    async proceedToCheckout() {
        await this.page
            .locator(cartLocators.checkoutButton)
            .click();
    }
}