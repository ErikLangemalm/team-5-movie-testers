Feature: Prevent booking already reserved seats

  Background:
    Given The user goes to the FilmVisarna website
    And The user selects "Sample Movie" and show time and then clicks continue
    And The user chooses a screening

    
  Scenario: Trying to reserve a seat already booked
    When The user finds an already reserved seat
    And  The user clicks on the reserved seat

    Then The reserve button should be visible but not clickable

  Scenario: Booking an unreserved seat
   
    When The user finds an unreserved seat
    And  The user clicks on the unreserved seat
    Then The reserve button should be clickable
    And  The user should be able to successfully reserve the seat
