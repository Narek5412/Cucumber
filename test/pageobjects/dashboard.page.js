const {$} = require('@wdio/globals')
const {browser} = require('@wdio/globals')
const dashboardPageURL = "https://practicesoftwaretesting.com/";

class DashboardPage {
    get imgProduct() {
        return browser.$('div[class="card-body"]')
    }

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

    get productName1() {
        return browser.$('h5[data-test="product-name"]')
    }

    get productName() {
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

    async productDetails() {
        await this.productName1.scrollIntoView();
        await this.productName1.waitForClickable()
        await this.productName1.click()
    }

    async searching() {
        await this.inputSearch.setValue("Combination Pliers")
        await this.buttonSearch.waitForClickable()
        await this.buttonSearch.click();
    }

    async getNameText() {
        await this.productName.waitForDisplayed()
        return await this.productName.getText()
    }

    async getNameText1() {
        await this.productName1.waitForDisplayed()
        return await this.productName1.getText()
    }

    async filtersByCategory() {
        await this.hammerCheckbox.scrollIntoView()
        await this.hammerCheckbox.click()
    }

    async getHammerText() {
        await this.hammer.waitForDisplayed()
        return await this.hammer.getText()
    }

    async getPriceSettings() {
        await this.priceSettings.click()
        await this.priceHighToLow.click()
    }

    async getToolCabinetText() {
        await this.toolCabinet.waitForDisplayed()
        return await this.toolCabinet.getText()
    }
}

module.exports = new DashboardPage();