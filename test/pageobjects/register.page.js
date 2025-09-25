const {$} = require('@wdio/globals');
const {browser} = require('@wdio/globals')
const registerPageURL = "https://practicesoftwaretesting.com/auth/register"

class RegisterPage {

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

    get countryDropdown() {
        return browser.$('select[data-test="country"]')
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
    get registerPageErrorMassage () {
        return browser.$('div[data-test="register-error"]')
    }

    async open() {
        await browser.url(registerPageURL);
    }

    async register(firstName, lastName, dateOfBirth, street, postalCode, city, state, phone, email, password,countryCode) {
        await this.inputFirstName.setValue(firstName);
        await this.inputLastName.setValue(lastName);
        await this.inputDateOfBirth.setValue(dateOfBirth);
        await this.inputStreet.setValue(street);
        await this.inputPostalCode.setValue(postalCode);
        await this.inputCity.setValue(city);
        await this.inputState.setValue(state);
        await this.inputPhone.setValue(phone);
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.selectCountry(countryCode);

        await this.registerButton.waitForClickable()
        await this.registerButton.click()
    }
    async selectCountry(countryCode) {
        await this.countryDropdown.waitForClickable(5000);
        await this.countryDropdown.click();
        const countryOption = await browser.$(`option[value="${countryCode}"]`);
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