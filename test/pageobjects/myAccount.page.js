const {$} = require('@wdio/globals')
const {browser} = require('@wdio/globals')
const myAccountPageURL = "https://practicesoftwaretesting.com/account"

class MyAccountPage {
    get title() {
        return browser.$('h1[data-test="page-title"]')
    }

}

module.exports = new MyAccountPage();