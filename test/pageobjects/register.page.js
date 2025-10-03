const { $ } = require('@wdio/globals');
const BasePage = require('./base.page');

class RegisterPage extends BasePage {
  get inputFirstName() {
    return $('input[data-test="first-name"]');
  }

  get inputLastName() {
    return $('input[data-test="last-name"]');
  }

  get inputDateOfBirth() {
    return $('input[data-test="dob"]');
  }

  get inputStreet() {
    return $('input[data-test="street"]');
  }

  get inputPostalCode() {
    return $('input[data-test="postal_code"]');
  }

  get inputCity() {
    return $('input[data-test="city"]');
  }

  get inputState() {
    return $('input[data-test="state"]');
  }

  get countryDropdown() {
    return $('select[data-test="country"]');
  }

  get inputPhone() {
    return $('input[data-test="phone"]');
  }

  get inputEmail() {
    return $('input[data-test="email"]');
  }

  get inputPassword() {
    return $('input[data-test="password"]');
  }

  get registerButton() {
    return $('button[data-test="register-submit"]');
  }

  get errorMassage() {
    return $('div[data-test="register-error"]');
  }

  async open() {
    return super.open('auth/register');
  }

  async register(user) {
    await this.setInputValue(this.inputFirstName, user.firstName);
    await this.setInputValue(this.inputLastName, user.lastName);
    await this.setInputValue(this.inputDateOfBirth, user.dateOfBirth);
    await this.setInputValue(this.inputStreet, user.street);
    await this.setInputValue(this.inputPostalCode, user.postalCode);
    await this.selectCountry(user.countryCode);
    await this.setInputValue(this.inputCity, user.city);
    await this.setInputValue(this.inputState, user.state);
    await this.setInputValue(this.inputPhone, user.phone);
    await this.setInputValue(this.inputEmail, user.email);
    await this.setInputValue(this.inputPassword, user.password);

    await this.clickElement(this.registerButton);
  }

  async selectCountry(countryCode) {
    await this.countryDropdown.waitForClickable(5000);
    await this.countryDropdown.click();
    const countryOption = await $(`option[value="${countryCode}"]`);
    await countryOption.scrollIntoView();
    await countryOption.click();
  }

  async getErrorMessageText() {
    await this.errorMassage.waitForDisplayed();
    const errorText = await this.errorMassage.getText();
    return errorText;
  }
}

module.exports = new RegisterPage();
