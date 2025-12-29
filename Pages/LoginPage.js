import BasePage from "./BasePage";

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.loginLink = page.getByRole('link', { name: ' Signup / Login' });
    this.emailField = page.locator('//*[@id="form"]/div/div/div[1]/div/form/input[2]');
    this.passwordField = page.locator('//*[@id="form"]/div/div/div[1]/div/form/input[3]');
    this.loginButton = page.locator('//*[@id="form"]/div/div/div[1]/div/form/button');
    this.welcomeMessage = page.locator('//*[@id="header"]/div/div/div/div[2]/div/ul/li[10]/a');
  }

  async goToLoginPage() {
    await this.loginLink.click();
  }

  async login(email, password) {
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }
}

export default LoginPage;