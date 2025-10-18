Feature: Product Details Functionality
  Background:
    Given the user is on the homepage
  Scenario:Should display product details correctly
    When they navigate to the product details page1
    Then the page should display the product name, description, price, and related products
  Scenario:Should add the product to favorites list
    When they navigate to the product details page2
    And they add the product to their cart
    Then the product should be in the cart, and the cart icon should update to reflect the new item count
  Scenario:Should add the product to favorites list
    When they navigate to the product details page3
    And they add the product to their favorites list
    Then the product should be in the favorites list, and a message "Product added to your favorites list." should be displayed
  Scenario:Should the user search a product and get a matching result
    When they search for a product name
    Then a list of products matching the search term should be displayed
  Scenario:Should the user Filtering and Sorting product by price from high to low and get a matching result
    When they sort the products from high to low price
    Then the displayed products should be sorted by price in descending order
#  Scenario:Should display product details correctly
#    When they filter products by a category
#    Then the displayed products should match the selected category and sort order