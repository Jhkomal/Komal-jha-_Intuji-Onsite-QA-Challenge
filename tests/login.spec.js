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
  });
});
