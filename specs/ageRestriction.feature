Feature: Age restriction

  As a user age restricted content should not be available for underaged individuals to purchase.
  Background:
    Given that I am on the start page
    And I have logged in

  Scenario: Age restricted content should not have children as a ticket option
    When I click on a movie that has an age restriction of 15 years old
    And I click on a screening.
    Then "children" shouldnt be an option.