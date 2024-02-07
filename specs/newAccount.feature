Feature: Create new account

  As a user I want to be able to register a new account

  Scenario: create new account.
    Given That I am on the first page.
    When I press the logo in the top right.
    And I select bli medlem.
    And I input my email and password.

  Scenario: create account that already exists.
    Given That I am om the first page.
    And I have already created an account.
    When I press the logo in the top right.
    And I select bli medlem.
    And I input my email and password.
    Then I shouldnt be able to create a new account.

  Scenario: input for email doesnt correspond to an email address
    Given That I am on the first page.
    When I press the logo in the top right.
    And I select bli medlem.
    And I input a random string as an email and password.
    Then I shouldnt be able to create a new account.