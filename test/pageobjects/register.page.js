const {$} = require('@wdio/globals');
const BasePage = require('./base.page');
class RegisterPage extends BasePage {
    get inputFirstName() {
        return $('input[data-test="first-name"]')
    }
    get inputLastName() {
        return $('input[data-test="last-name"]')
    }
    get inputDateOfBirth() {
        return $('input[data-test="dob"]')
    }
    get inputStreet() {
        return $('input[data-test="street"]')
    }
    get inputPostalCode() {
        return $('input[data-test="postal_code"]')
    }
    get inputCity() {
        return $('input[data-test="city"]')
    }
    get inputState() {
        return $('input[data-test="state"]')
    }
    get countryDropdown() {
        return $('select[data-test="country"]')
    }
    get inputPhone() {
        return $('input[data-test="phone"]')
    }
    get inputEmail() {
        return $('input[data-test="email"]')
    }
    get inputPassword() {
        return $('input[data-test="password"]')
    }
    get registerButton() {
        return $('button[data-test="register-submit"]')
    }
    get registerPageErrorMassage () {
        return $('div[data-test="register-error"]')
    }
    async open() {
        return super.open('auth/register');
    }
    async register(firstName, lastName, dateOfBirth, street, postalCode, city, state, phone, email, password,countryCode) {
        await this.setInputValue(this.inputFirstName,firstName);
        await this.setInputValue(this.inputLastName,lastName);
        await this.setInputValue(this.inputDateOfBirth,dateOfBirth);
        await this.setInputValue(this.inputStreet,street);
        await this.setInputValue(this.inputPostalCode,postalCode);
        await this.setInputValue(this.inputCity,city);
        await this.setInputValue(this.inputState,state);
        await this.setInputValue(this.inputPhone,phone);
        await this.setInputValue(this.inputEmail,email);
        await this.setInputValue(this.inputPassword,password);
        await this.selectCountry(countryCode);

        await this.clickElement(this.registerButton)
    }
    async selectCountry(countryCode) {
        await this.countryDropdown.waitForClickable(5000);
        await this.countryDropdown.click();
        const countryOption = await $(`option[value="${countryCode}"]`);
        await countryOption.scrollIntoView();
        await countryOption.click();
    }
async errorMessageText() {
        await this.registerPageErrorMassage.waitForDisplayed();
        const errorText = await this.registerPageErrorMassage.getText();
        return errorText;
}

}
module.exports = new RegisterPage();