const {Given, When, Then} = require('@wdio/cucumber-framework');
const LoginPage = require('../pageobjects/login.page');
const RegisterPage = require('../pageobjects/register.page');
const MyAccountPage = require('../pageobjects/myAccount.page');
const DashboardPage = require('../pageobjects/dashboard.page');
const ProductPage = require('../pageobjects/product.page');
const {products, users} = require('../data/testData');
const {expect, should, assert} = require('chai');
should();


Given('the user is on the registration page.', async () => {
    await RegisterPage.open();
});
When('they register with valid credentials', async () => {
    await RegisterPage.register(users.newUserWithValidCredentials);
});
Then('they should be redirected to the login page', async () => {
    await LoginPage.title.isDisplayed({
        timeout: 10000,
    });
    await LoginPage.title.waitForDisplayed();
    const title = await LoginPage.title.isDisplayed();
    expect(title).to.be.true;
});
When('they register with the same valid credentials again', async () => {
    await RegisterPage.register(users.newUserWithRepeatedCredentials);
});
Then('they should be told "A customer with this email address already exists."', async () => {
    await LoginPage.title.isDisplayed({
        timeout: 10000,
    });
    const errorText = await RegisterPage.getErrorMessageText();
    expect(errorText).to.equal(
        'A customer with this email address already exists.',
    );
});

Given('the user is on the login page', async () => {
    await LoginPage.open();
});
When('they sign in with a valid email and password', async () => {
    await LoginPage.login(users.validUser.email, users.validUser.password);
});
Then('they should be redirected to their account page', async () => {
    await MyAccountPage.title.waitForDisplayed();
    const title = await MyAccountPage.title.isDisplayed();
    expect(title).to.be.true;
});
//////////////////////////////////////////////////////////
Given('the user is on the homepage', async () => {
    await LoginPage.open();
    await LoginPage.login(users.validUser.email, users.validUser.password);
    await MyAccountPage.title.waitForDisplayed();
    await DashboardPage.open();
});
When('they navigate to the product details page1', async () => {
    await DashboardPage.navigateToProduct();
});
Then('the page should display the product name, description, price, and related products', async () => {
    await ProductPage.combinationPliersName.waitForDisplayed();
    const productNameIsDisplayed =
        await ProductPage.combinationPliersName.isDisplayed();
    assert.isTrue(productNameIsDisplayed);
});

When('they navigate to the product details page2', async () => {
    await DashboardPage.navigateToProduct();
});
When('they add the product to their cart', async () => {
    await ProductPage.addProductToCart();
});
Then('the product should be in the cart, and the cart icon should update to reflect the new item count', async () => {
    await ProductPage.message.waitForDisplayed();
    const messageText = await ProductPage.getMessageText();
    messageText.should.include('Product added to shopping cart.');
});

When('they navigate to the product details page3', async () => {
    await DashboardPage.navigateToProduct();
});
When('they add the product to their favorites list', async () => {
    await ProductPage.addProductToFavorites();
});
Then('the product should be in the favorites list, and a message "Product added to your favorites list." should be displayed', async () => {
    await ProductPage.message.waitForDisplayed();
    const messageText = await ProductPage.getMessageText();
    messageText.should.include('your favorites list');
});

When('they search for a product name', async () => {
    await DashboardPage.searchForProduct(products.pliers.name);
});
Then('a list of products matching the search term should be displayed', async () => {
    await DashboardPage.combinationPliersName.waitForDisplayed();
    const combinationPliersTextIsDisplayed =
        await DashboardPage.combinationPliersName.isDisplayed();
    await assert.isOk(combinationPliersTextIsDisplayed);
});

When('they sort the products from high to low price', async () => {
    await DashboardPage.getPriceSettings();
});
Then('the displayed products should be sorted by price in descending order', async () => {
    await DashboardPage.toolCabinet.waitForDisplayed();
    const toolCabinetTextIsDisplayed =
        await DashboardPage.toolCabinet.isDisplayed();
    await assert.isOk(toolCabinetTextIsDisplayed);
});

// When('they filter products by a category', async () => {
//     await DashboardPage.filtersByCategory();
// });
// Then('the displayed products should match the selected category and sort order', async () => {
//     const allNames = await DashboardPage.getAllFilteredProductNames();
//     await assert.include(allNames, 'Safety Goggles');
// });
