const {$} = require('@wdio/globals')
const BasePage = require('./base.page')
const DashboardPage = require('./dashboard.page')
class ProductPage  extends BasePage {
    get addToFavourites() {
        return $('button[data-test="add-to-favorites"]')
    }
    get addToCart() {
        return $('button[data-test="add-to-cart"]')
    }
    get message() {
        return $('div[id="toast-container"]')
    }
    get combinationPliersText() {
        return $('h5[data-test="product-name"]')
    }
    async open() {
        await DashboardPage.open();
        await this.productDetails();
    }
    async productDetails() {
        await this.combinationPliersText.scrollIntoView();
        await this.clickElement(this.combinationPliersText)
    }
    async addProductToFavorites() {
        await this.clickElement(this.addToFavourites)
    }
    async addProductToCart() {
        await this.clickElement(this.addToCart)
    }
    async getMessageText() {
        await this.message.waitForDisplayed()
        return await this.message.getText()
    }
}
module.exports = new ProductPage();