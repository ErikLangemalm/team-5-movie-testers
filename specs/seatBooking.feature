Feature: Booking seats
    As a user I want to book and reserve seats. 

  Scenario: Outline: Search for <lampa>
    Given that I am on the first page
    When I click on a timeslot
    And I click on a specifik timeslot
    And I reserve a seat
    And I select "vuxen"
    And I select a seat
    Then That seat should be reserved for me under the bookings tab.
