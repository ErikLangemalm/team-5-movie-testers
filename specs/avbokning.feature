Feature: Cancellation already booked seats

  Background:
    Given user is in the filmvisare site
    And it isn't crashing or displaying error syntax

  Scenario: Cancel booking
    Then clicks button that says "Logga in"
    Then User logs into the website using gmail and password
    Then user proceeds to go into bookings



