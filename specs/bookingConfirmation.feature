Feature: Booking Confirmation
  As a visitor
  I want to be able to receive a booking confirmation
  So that I can then know if my movie tickets are bought and booked

  Scenario: Booking Confirmation Screen
    Given I successfully buy my tickets
    Then I should be directed from the payment screen to the booking confirmation screen
    And I should then be able to see the following information: 
  
  Scenario: Booking Confirmation Login
    Then I log in into the page
    Then I check mina bokningar
    Then I should see all my bookings with the following information:

 
