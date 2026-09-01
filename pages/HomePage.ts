import { Page } from '@playwright/test';
import { homeLocators } from '../locators/home.locators';

export class HomePage {
    constructor(private page: Page) {}

    async searchProduct(productName: string) {
        await this.page.locator(homeLocators.searchInput).fill(productName);
        await this.page.locator(homeLocators.searchInput).press('Enter');
    }
}