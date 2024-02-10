Feature: Booking Confirmation
  As a visitor
  I want to be able to receive a booking confirmation
  So that I can then know if my movie tickets are bought and booked

  Scenario: Booking Confirmation Screen
    Given I successfully buy my tickets
    Then I should be directed from the payment screen to the booking confirmation screen
    And I should then be able to see the following information:
   Examples:
    | Movie name |
    | Time and date |
    | Seat location/number |
    | Quantity |
    | Payment method |
    | Total cost |
    | Booking number |


  Scenario: Booking Confirmation Login
    Given I am on logged in on the page
    When I check mina bokningar
    And I should see all my bookings with the following information
    Examples:
    | Movie name |
    | Time and date |
    | Seat location/number |
    | Quantity |
    | Payment method |
    | Total cost |
    | Booking number |
