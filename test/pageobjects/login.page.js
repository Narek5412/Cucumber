const {$} = require('@wdio/globals');
const BasePage = require('./base.page');
class LoginPage extends BasePage{

    get inputEmail() {
        return $('input[data-test="email"]')
    }

    get inputPassword() {
        return $('input[data-test="password"]')
    }

    get loginButton() {
        return $('input[data-test="login-submit"]')
    }

    get title() {
        return $('div[class="col-lg-6 auth-form"]')
    }

    async open() {
        return super.open('auth/login');
    }

    async login(email, password) {
        await this.setInputValue(this.inputEmail, email);
        await this.setInputValue(this.inputPassword, password);
        await this.clickElement(this.loginButton);
    }

}

module.exports = new LoginPage();
