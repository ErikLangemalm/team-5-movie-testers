Feature: Booking seats
  As a user I want to book and reserve seats.

  Scenario: I want to book a seat for one adult and have that seat reserved.
    Given that I am on the first page
    When I click on a timeslot
    And I click on a specifik timeslot
    And I select vuxen
    And I reserve a seat
    And I put in my email
    Then A seat should be reserved for me in the booking confirmation.

  Scenario: When I book more seats than there are available in a row I shouldn't be able to book any seats.
    Given that I am on the first page
    When I click on a timeslot
    And I click on a specifik timeslot
    And I select vuxen 100 times.
    And I reserve a seat.
    Then I shouldnt be able to continue with my booking.