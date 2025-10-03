const { $ } = require('@wdio/globals');
const BasePage = require('./base.page');

class MyAccountPage extends BasePage {
  get title() {
    return $('h1[data-test="page-title"]');
  }
}

module.exports = new MyAccountPage();
