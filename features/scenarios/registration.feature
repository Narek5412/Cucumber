Feature: Registration functionality
  Background:
    Given the user is on the registration page.
  Scenario:Should redirect to login page
    When they register with valid credentials
    Then they should be redirected to the login page
  Scenario: Should show duplicate error
    When they register with the same valid credentials again
    Then they should be told "A customer with this email address already exists."