Feature: Cancellation already booked seats

  Background:
    And it isn't crashing or displaying error syntax

  Scenario: Cancel booking
    Given that the user has already pre booked a seat
    And has earlier received a confirmation email
    When User logs into the website using gmail and password
    And user proceeds to go into bookings
    Then user should see previosly booked dates and should be given the option too onbook a specific movie


