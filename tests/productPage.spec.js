import { test, expect } from '@playwright/test';
import LoginPage from '../Pages/LoginPage';

test.describe('Login Tests', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigateToHomePage();
  });

  test('User should login successfully with valid credentials', async () => {
  await loginPage.goToLoginPage();
  await loginPage.login('komaljha5567@gmail.com', 'Password@123');
  await expect(loginPage.welcomeMessage).toBeVisible();
  await expect(page.getByRole('heading', { name: ' Women' })).toBeVisible();
  await page.getByRole('link', { name: ' Women' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Dress' }).click();
  await page.getByText('Add to cart').nth(1).click();
  await expect(page.getByRole('button', { name: 'Continue Shopping' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'View Cart' })).toBeVisible();
  await page.getByRole('link', { name: 'View Cart' }).click();
  await page.getByText('Proceed To Checkout').click();
});
    });
