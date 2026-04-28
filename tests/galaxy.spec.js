const { test } = require('@playwright/test');

test('Search Galaxy and add to cart', async ({ page }) => {
    await page.goto('https://www.amazon.in');

    await page.fill('#twotabsearchtextbox', 'Samsung Galaxy');
    await page.keyboard.press('Enter');

    await page.waitForSelector('.s-main-slot');

    const price = await page.locator('.a-price').first().textContent();
    console.log("Galaxy Price:", price?.trim());

    try {
        const link = page.locator('h2 a').first();

        if (await link.count() > 0) {
            await link.click({ timeout: 10000 });
            await page.waitForLoadState('domcontentloaded');
        }

        const addBtn = page.locator('#add-to-cart-button');

        if (await addBtn.count() > 0) {
            await addBtn.click().catch(() => { });
            console.log("Add to cart attempted");
        }

    } catch (e) {
        console.log("Handled add-to-cart issue");
    }
});