import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckOutPage';

test('Guest checkout with Cash on Delivery', async ({ page }) => {

    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await page.goto('/');

    await homePage.searchProduct('Demo Produkt');

    await expect(
        page.locator('a.product-name[title="Demo Produkt"]')
    ).toBeVisible();

    await productPage.openProduct();

    await productPage.addToCart();

    await cartPage.openCart();

    await cartPage.proceedToCheckout();

    await checkoutPage.fillCheckoutForm();

    await checkoutPage.clickNext();

    await checkoutPage.placeOrder();
});
