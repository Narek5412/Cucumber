Feature: Login functionality
  Scenario:Should redirect to account page
    Given the user is on the login page
    When they sign in with a valid email and password
    Then they should be redirected to their account page
