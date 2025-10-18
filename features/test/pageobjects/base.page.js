const { browser } = require('@wdio/globals');

module.exports = class BasePage {
  open(path) {
    return browser.url(path);
  }

  async clickElement(element) {
    await element.waitForClickable();
    await element.click();
  }

  async setInputValue(element, text) {
    await element.waitForDisplayed();
    await element.setValue(text);
  }
};
