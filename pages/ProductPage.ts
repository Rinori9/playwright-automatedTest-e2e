import { Page } from '@playwright/test';
import { productLocators } from '../locators/product.locators';

export class ProductPage {
    constructor(private page: Page) {}

    async openProduct() {
        await this.page.locator(productLocators.productLink).click();
    }
          async addToCart() {
        await this.page
            .locator(productLocators.addToCartButton)
            .click();
    }
}
