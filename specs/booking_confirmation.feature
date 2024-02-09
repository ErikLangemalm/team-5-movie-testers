Feature: Booking Confirmation
  As a visitor
  I want to be able to receive a booking confirmation
  So that I can then know if my movie tickets are bought and booked

  Background:
    Given that I successfully bought my tickets

  Scenario: Booking Confirmation Screen
    Given I successfully buy my tickets
    Then I should be directed from the payment screen to the booking confirmation screen
    And I should then be able to see the following information:
    Examples:
    | Movie name |
    | Time and date |
    | Movie image |
    | Seat location/number |
    | Quantity |
    | Payment method |
    | Total cost |
    | Booking number |
    | Billing address/contact information |


  Scenario: Booking Confirmation Email
    Given I am on my preferred email app
    When I check my unread emails
    And I should see an email from "noreply@filmvisarna.se" containing the following information:
    Examples:
    | Movie name |
    | Time and date |
    | Movie image |
    | Seat location/number |
    | Quantity |
    | Payment method |
    | Total cost |
    | Booking number |
    | Billing address/contact information |