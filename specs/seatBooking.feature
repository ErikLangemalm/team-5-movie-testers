Feature: Booking seats
  As a user I want to book and reserve seats.

  Scenario: Outline: I want to book a seat for one adult and have that seat reserved.
    Given that I am on the first page
    When I click on a timeslot
    And I click on a specifik timeslot
    And I select vuxen
    And I reserve a seat
    And I put in my email
    Then A seat should be reserved for me in the booking confirmation.