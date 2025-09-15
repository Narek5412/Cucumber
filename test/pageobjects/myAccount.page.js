const {$} = require('@wdio/globals')
const {browser} = require('@wdio/globals')
const myAccountPageURL = "https://practicesoftwaretesting.com/account"

class MyAccountPage {
    get title() {
        return browser.$('h1[data-test="page-title"]')
    }

    async open() {
        await browser.url(myAccountPageURL);
    }

    async getTitleText() {
        await this.title.waitForDisplayed()
        return await this.title.getText()
    }

}

module.exports = new MyAccountPage();