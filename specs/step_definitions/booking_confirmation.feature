Feature: Booking Confirmation
  As a visitor
  I want to be able to receive a booking confirmation
  So that i can then know if my movie tickets are bought and booked

  Background:
    Given that i succsesfully bought my tickets

  Scenario: Booking Confirmation Screen
    Given I succsesfully buy my tickets
    Then I should be directed from the payment screen to the booking confirmation screen
    I should then be able to see following information:
    - Movie name
    - Time and date
    - Movie image
    - Seat location/number
    - Quantity
    - Payment method
    - Total cost
    - Booking number
    - Billing adress/contact information


  Scenario: Booking Confirmation Email
    Given I am on my preffered email app
    When I check my unread emails
    Then I should see an email from "noreply@filmvisarna.se" containing the following information:
    - Movie name
    - Time and date
    - Movie image
    - Seat location/number
    - Quantity
    - Payment method
    - Total cost
    - Booking number
    - Billing adress/contact information