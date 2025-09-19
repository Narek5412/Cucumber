const {expect} = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const RegisterPage = require('../pageobjects/register.page')
const MyAccountPage = require('../pageobjects/myAccount.page')
const DashboardPage = require('../pageobjects/dashboard.page')
const ProductPage = require('../pageobjects/product.page')
const { products, users, filters } = require('../data/testData');
describe('Registration Functionality on practicesoftwaretesting.com', () => {
    it('should registration with valid credentials', async () => {
        //     Given the user is on the registration page.
        await RegisterPage.open();
        //     When they register with valid credentials
        await RegisterPage.register(
            users.newUser.firstName,
            users.newUser.lastName,
            users.newUser.dateOfBirth,
            users.newUser.street,
            users.newUser.postalCode,
            users.newUser.city,
            users.newUser.state,
            users.newUser.phone,
            users.newUser.email,
            users.newUser.password,
            'AM',
        );
        //     Then they should be redirected to the login page
        expect(await LoginPage.title).toBeDisplayed();
    });
    // it('should registration with invalid credentials', async () => {
    //     await RegisterPage.open();
    //     await RegisterPage.register(
    //         'tom',
    //         'smith',
    //         '2001-01-01',
    //         'street',
    //         '001',
    //         'city',
    //         'state',
    //         '1234567890',
    //         'qwerty@gmail.com',
    //         'qscgy-54321',
    //     );
    //
    //     const error =  await RegisterPage.getErrorText()
    //     await expect(error).toBe("Password can not include invalid characters.")
    //
    // })
})
describe('Login Functionality on practicesoftwaretesting.com', () => {
    it('should login with valid credentials', async () => {
        //     Given the user is on the login page,
        await LoginPage.open();
        //     When they sign in with a valid email and password,
        await LoginPage.login(
            users.validUser.email,
            users.validUser.password,)
        //     Then they should be redirected to their account page.
        await expect(MyAccountPage.title).toBeDisplayed()
    })
    // it('should login with invalid credentials', async () => {
    //     await LoginPage.open();
    //     await LoginPage.login('qwerty@gmail.com',
    //         'qscgy-54321',)
    //     const error =  await LoginPage.getErrorText()
    //     await expect(error).toBe("Invalid email or password")
    // })
});
describe('Product Details Functionality on practicesoftwaretesting.com', () => {
    it('should Product Details view', async () => {
        //     Given the user is on the homepage
        await DashboardPage.open();
        //     When they view a product's details.
        await ProductPage.productDetails();
        //     Then the page should display the product name, description, price, and related products.
        await expect(DashboardPage.combinationPliersText).toBeDisplayed();
    })
})
describe('Adding To Cart Functionality on practicesoftwaretesting.com', () => {
    it('should adding the product to favorites list', async () => {
        //     Given the user is on the product details page,
        await ProductPage.open();
        //     When they add the product to their cart,
        await ProductPage.addProductToCart();
        //     Then the product should be in the cart, and the cart icon should update to reflect the new item count.
        expect(ProductPage.message).toBeDisplayed();
    })
})

describe('Adding To Favorite Functionality on practicesoftwaretesting.com', () => {
    it('should adding the product to favorites list', async () => {
        //     Given the user is on the product details page,
        await ProductPage.open();
        //     When they add the product to their favorites list,
        await ProductPage.addProductToFavorites();
        //     Then the product should be in the favorites list, and a message "Product added to your favorites list." should be displayed.
        const message = await ProductPage.getMessageText()
        expect(ProductPage.message).toBeDisplayed();
    })
})
describe('Searching Functionality on practicesoftwaretesting.com', () => {
    it('should the user search a product', async () => {
        //     Given the user is on the homepage.
        await DashboardPage.open();
        //     When they search for a product name,
        await DashboardPage.searchForProduct(products.pliers.name);
        //     Then a list of products matching the search term should be displayed.
        await expect(ProductPage.combinationPliersText).toBeDisplayed()
    })
})
describe('Filtering and Sorting Functionality By Price on practicesoftwaretesting.com', () => {
    it('should the user Filtering and Sorting product', async () => {
        //    Given the user is on the homepage.
        await DashboardPage.open();
        //     When they sort the products from high to low price,
        await DashboardPage.getPriceSettings();
        //     Then the displayed products should be sorted by price in descending order.
        await expect(DashboardPage.toolCabinet).toBeDisplayed()
    })
})
describe('Filtering and Sorting Functionality By Categories on practicesoftwaretesting.com', () => {
    it('should the user Filtering and Sorting product', async () => {
        //    Given the user is on the homepage.
        await DashboardPage.open();
        //     When they filter products by a category.
        await DashboardPage.filtersByCategory();
        //     Then the displayed products should match the selected category and sort order.
        const name = await DashboardPage.getFilteredProductName()
        await expect(DashboardPage.hammer).toBeDisplayed()
    })
})

