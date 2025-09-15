const {$} = require('@wdio/globals')
const {browser} = require('@wdio/globals')
const productPageURL = "https://practicesoftwaretesting.com/product/01K4Z0624NTCC6914XFG3QJBHF";

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

    async open() {
        await browser.url(productPageURL);
    }

    async addingToFavourites() {
        await this.addToFavourites.waitForClickable()
        await this.addToFavourites.click()
    }

    async addingToCart() {
        await this.addToCart.waitForClickable()
        await this.addToCart.click()
    }

    async getMessageText() {
        await this.message.waitForDisplayed()
        await browser.pause(5000)
        return await this.message.getText()
    }
}

module.exports = new ProductPage();