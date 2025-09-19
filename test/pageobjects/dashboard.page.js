const {$} = require('@wdio/globals')
const {browser} = require('@wdio/globals')
const dashboardPageURL = "https://practicesoftwaretesting.com/";

class DashboardPage {
    get inputSearch() {
        return browser.$('input[data-test="search-query"]')
    }

    get buttonSearch() {
        return browser.$('button[data-test="search-submit"]')
    }

    get priceSettings() {
        return browser.$('select[data-test="sort"]')
    }

    get priceHighToLow() {
        return browser.$('option[value="price,desc"]')
    }

    get combinationPliersText() {
        return browser.$('h1[data-test="product-name"]')
    }

    get hammerCheckbox() {
        return browser.$('input[class="icheck"]')
    }

    get hammer() {
        return browser.$('h5[data-test="product-name"]')
    }

    get toolCabinet() {
        return browser.$('h5[data-test="product-name"]')
    }

    async open() {
        await browser.url(dashboardPageURL);
    }

    async searchForProduct(searchTerm) {
        await this.inputSearch.setValue(searchTerm);
        await this.buttonSearch.waitForClickable();
        await this.buttonSearch.click();
    }

    async filtersByCategory() {
        await this.hammerCheckbox.scrollIntoView()
        await this.hammerCheckbox.click()
    }

    async getFilteredProductName() {
        await this.hammer.waitForDisplayed()
        return await this.hammer.getText()
    }

    async getPriceSettings() {
        await this.priceSettings.click()
        await this.priceHighToLow.click()
    }
}

module.exports = new DashboardPage();