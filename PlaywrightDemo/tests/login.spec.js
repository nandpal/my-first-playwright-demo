const { test, expect } = require('@playwright/test');

test('Verify successful login', async ({ page }) => {
  // Open the demo application
  await page.goto('https://www.saucedemo.com/');

  // Enter valid login details
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');

  // Click the Login button
  await page.locator('#login-button').click();

  // Verify that the Products page is displayed
  await expect(page).toHaveURL(/inventory.html/);
  await expect(page.locator('.title')).toHaveText('Products');
});

test('Verify login with an incorrect password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('wrong_password');
  await page.locator('#login-button').click();

  // Verify that an error message is displayed
  await expect(page.locator('[data-test="error"]')).toBeVisible();
});
