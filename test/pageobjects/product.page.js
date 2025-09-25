const {$} = require('@wdio/globals')
const {browser} = require('@wdio/globals')
const DashboardPage = require('../pageobjects/dashboard.page')
class ProductPage {
    get addToFavourites() {
        return browser.$('button[data-test="add-to-favorites"]')
    }

    get addToCart() {
        return browser.$('button[data-test="add-to-cart"]')
    }

    get message() {
        return browser.$('div[id="toast-container"]')
    }
    get combinationPliersText() {
        return browser.$('h5[data-test="product-name"]')
    }

    async open() {
        await DashboardPage.open();
        await this.productDetails();
    }
    async productDetails() {
        await this.combinationPliersText.scrollIntoView();
        await this.combinationPliersText.waitForClickable()
        await this.combinationPliersText.click()
    }
    async addProductToFavorites() {
        await this.addToFavourites.waitForClickable()
        await this.addToFavourites.click()
    }

    async addProductToCart() {
        await this.addToCart.waitForClickable()
        await this.addToCart.click()
    }

    async getMessageText() {
        await this.message.waitForDisplayed()
        return await this.message.getText()
    }
}

module.exports = new ProductPage();