const {$} = require('@wdio/globals');
const {browser} = require('@wdio/globals')
const registerPageURL = "https://practicesoftwaretesting.com/auth/register"

class RegisterPage {
    get errorMessage() {
        return browser.$('div[data-test="password-error"]');
    }

    get inputFirstName() {
        return browser.$('input[data-test="first-name"]')
    }

    get inputLastName() {
        return browser.$('input[data-test="last-name"]')
    }

    get inputDateOfBirth() {
        return browser.$('input[data-test="dob"]')
    }

    get inputStreet() {
        return browser.$('input[data-test="street"]')
    }

    get inputPostalCode() {
        return browser.$('input[data-test="postal_code"]')
    }

    get inputCity() {
        return browser.$('input[data-test="city"]')
    }

    get inputState() {
        return browser.$('input[data-test="state"]')
    }

    get selectCountry() {
        return browser.$('select[data-test="country"]')
    }

    get country() {
        return browser.$('option[value="AM"]')
    }

    get inputPhone() {
        return browser.$('input[data-test="phone"]')
    }

    get inputEmail() {
        return browser.$('input[data-test="email"]')
    }

    get inputPassword() {
        return browser.$('input[data-test="password"]')
    }

    get registerButton() {
        return browser.$('button[data-test="register-submit"]')
    }

    async open() {
        await browser.url(registerPageURL);
    }

    async register(firstName, lastName, dateOfBirth, street, postalCode, city, state, phone, email, password) {
        await this.inputFirstName.setValue(firstName);
        await this.inputLastName.setValue(lastName);
        await this.inputDateOfBirth.setValue(dateOfBirth);
        await this.inputStreet.setValue(street);
        await this.inputPostalCode.setValue(postalCode);
        await this.inputCity.setValue(city);
        await this.inputState.setValue(state);
        await this.selectCountry.click(this.country.click());
        await this.inputPhone.setValue(phone);
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);

        await this.registerButton.waitForClickable()
        await this.registerButton.click()
    }

    async getErrorText() {
        await this.errorMessage.waitForDisplayed()
        return await this.errorMessage.getText()
    }

}
module.exports = new RegisterPage();