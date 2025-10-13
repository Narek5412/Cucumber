const LoginPage = require('../pageobjects/login.page');
const RegisterPage = require('../pageobjects/register.page');
const MyAccountPage = require('../pageobjects/myAccount.page');
const DashboardPage = require('../pageobjects/dashboard.page');
const ProductPage = require('../pageobjects/product.page');
const { products, users } = require('../data/testData');
const { expect, should, assert } = require('chai');
should();

describe('Registration Functionality on practicesoftwaretesting.com', () => {
  it('Should redirect to login page', async () => {
    //     Given the user is on the registration page.
    await RegisterPage.open();
    //     When they register with valid credentials
    await RegisterPage.register(users.newUserWithValidCredentials);
    //     Then they should be redirected to the login page
    await LoginPage.title.isDisplayed({
      timeout: 10000,
    });
    await LoginPage.title.waitForDisplayed();
    const title = await LoginPage.title.isDisplayed();
    expect(title).to.be.true;
  });

  it('Should show duplicate error', async () => {
    await RegisterPage.open();
    //     When they register with valid credentials
    await RegisterPage.register(users.newUserWithRepeatedCredentials);
    //     Then they should be redirected to the login page
    await LoginPage.title.isDisplayed({
      timeout: 10000,
    });
    const errorText = await RegisterPage.getErrorMessageText();
    expect(errorText).to.equal(
      'A customer with this email address already exists.',
    );
  });
});

describe('Login Functionality on practicesoftwaretesting.com', () => {
  it('Should redirect to account page', async () => {
    //     Given the user is on the login page,
    await LoginPage.open();
    //     When they sign in with a valid email and password,
    await LoginPage.login(users.validUser.email, users.validUser.password);
    //     Then they should be redirected to their account page.
    await MyAccountPage.title.waitForDisplayed();
    const title = await MyAccountPage.title.isDisplayed();
    expect(title).to.be.true;
  });
});

describe('Product Details Functionality on practicesoftwaretesting.com', () => {
  it('Should display product details correctly', async () => {
    //     Given the user is on the homepage
    await DashboardPage.open();
    //     When they navigateing on the product details page,
    await DashboardPage.navigateToProduct();
    //     Then the page should display the product name, description, price, and related products.
    await ProductPage.combinationPliersName.waitForDisplayed();
    const productNameIsDisplayed =
      await ProductPage.combinationPliersName.isDisplayed();
    assert.isTrue(productNameIsDisplayed);
  });
});

describe('Adding To Cart Functionality on practicesoftwaretesting.com', () => {
  it('Should add the product to favorites list', async () => {
    //     Given the user is navigateing on the product details page,
    await DashboardPage.open();
    await DashboardPage.navigateToProduct();
    //     When they add the product to their cart,
    await ProductPage.addProductToCart();
    //     Then the product should be in the cart, and the cart icon should update to reflect the new item count.
    await ProductPage.message.waitForDisplayed();
    const messageText = await ProductPage.getMessageText();
    messageText.should.include('Product added to shopping cart.');
  });
});

describe('Adding To Favorite Functionality on practicesoftwaretesting.com', () => {
  it('Should add the product to favorites list', async () => {
    //     Given the user is navigateing on the product details page,
    await DashboardPage.open();
    await DashboardPage.navigateToProduct();
    //     When they add the product to their favorites list,
    await ProductPage.addProductToFavorites();
    //     Then the product should be in the favorites list, and a message "Product added to your favorites list." should be displayed.
    await ProductPage.message.waitForDisplayed();
    const messageText = await ProductPage.getMessageText();
    messageText.should.include('your favorites list');
  });
});

describe('Searching Functionality on practicesoftwaretesting.com', () => {
  it('Should the user search a product and get a matching result', async () => {
    //     Given the user is on the homepage.
    await DashboardPage.open();
    //     When they search for a product name,
    await DashboardPage.searchForProduct(products.pliers.name);
    //     Then a list of products matching the search term should be displayed.
    await DashboardPage.combinationPliersName.waitForDisplayed();
    const combinationPliersTextIsDisplayed =
      await DashboardPage.combinationPliersName.isDisplayed();
    await assert.isOk(combinationPliersTextIsDisplayed);
  });
});

describe('Filtering and Sorting Functionality on practicesoftwaretesting.com', () => {
  //    Given the user is on the homepage.
  beforeEach(async () => {
    await DashboardPage.open();
  });

  it('Should the user Filtering and Sorting product by price from high to low and get a matching result', async () => {
    //     When they sort the products from high to low price,
    await DashboardPage.getPriceSettings();
    //     Then the displayed products should be sorted by price in descending order.
    await DashboardPage.toolCabinet.waitForDisplayed();
    const toolCabinetTextIsDisplayed =
      await DashboardPage.toolCabinet.isDisplayed();
    await assert.isOk(toolCabinetTextIsDisplayed);
  });

  it('Should the user Filtering products by a category and get a matching result', async () => {
    //     When they filter products by a category.
    await DashboardPage.filtersByCategory();
    //     Then the displayed products should match the selected category and sort order.
    const allNames = await DashboardPage.getAllFilteredProductNames();
    await assert.include(allNames, 'Hammer');
  });
});
