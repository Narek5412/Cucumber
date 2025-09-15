const {$} = require('@wdio/globals')
const {browser} = require('@wdio/globals')
const loginPageURL = "https://practicesoftwaretesting.com/auth/login"

class LoginPage {

    get inputEmil() {
        return browser.$('input[data-test="email"]')
    }

    get inputPassword() {
        return browser.$('input[data-test="password"]')
    }

    get loginButton() {
        return browser.$('input[data-test="login-submit"]')
    }

    get errorMessage() {
        return browser.$('div[data-test="login-error"]')
    }

    get title() {
        return browser.$('div[class="col-lg-6 auth-form"]')
    }

    async open() {
        await browser.url(loginPageURL);
    }

    async login(emil, password) {
        await this.inputEmil.setValue(emil);
        await this.inputPassword.setValue(password);
        await this.loginButton.waitForClickable()
        await this.loginButton.click();
    }

    async getErrorText() {
        await this.errorMessage.waitForDisplayed()
        return await this.errorMessage.getText()

    }
}

module.exports = new LoginPage();
