const { $, $$ } = require('@wdio/globals');
const { browser } = require('@wdio/globals');
const BasePage = require('./base.page');

class DashboardPage extends BasePage {
  get inputSearch() {
    return $('input[data-test="search-query"]');
  }

  get buttonSearch() {
    return $('button[data-test="search-submit"]');
  }

  get priceSettings() {
    return $('select[data-test="sort"]');
  }

  get priceHighToLow() {
    return $('option[value="price,desc"]');
  }

  get hammerCheckbox() {
    return $('input[class="icheck"]');
  }

  get hammer() {
    return $$('h5[data-test="product-name"]');
  }

  get toolCabinet() {
    return browser.$('h5[data-test="product-name"]');
  }
  get combinationPliersName() {
    return $('h5[data-test="product-name"]');
  }

  async navigateToProduct() {
    await this.combinationPliersName.scrollIntoView();
    await this.clickElement(this.combinationPliersName);
  }

  async open() {
    return super.open('');
  }

  async searchForProduct(searchTerm) {
    await this.setInputValue(this.inputSearch, searchTerm);
    await this.clickElement(this.buttonSearch);
  }

  async filtersByCategory() {
    await this.hammerCheckbox.scrollIntoView();
    await this.clickElement(this.hammerCheckbox);
  }

  async getAllFilteredProductNames() {
    await browser.waitUntil(async () => (await this.hammer).length > 0, {
      timeout: 10000,
      timeoutMsg: 'Expected filtered products to be displayed but none found',
    });
    const productElements = await this.hammer;
    const productWithNames = [];
    for (const item of productElements) {
      productWithNames.push((await item.getText()).trim());
    }
    return productWithNames;
  }

  async getPriceSettings() {
    await this.priceSettings.click();
    await this.priceHighToLow.click();
  }
}

module.exports = new DashboardPage();
