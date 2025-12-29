class BasePage {
    constructor(page) {
        this.page = page;
        this.baseURL = 'https://automationexercise.com/';
    }

    async navigateToHomePage(){
        await this.page.goto(this.baseURL);

 }
    }


export default BasePage;