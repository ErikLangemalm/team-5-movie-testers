Feature: Prevent booking already reserved seats

  Background:
    Given the user is on the websites start page
    And   the user selects "Sample Movie" and show time and then clicks "Gå vidare"
    And   the user chooses a screening
    When  the user should be able to see available seats
    And   the user clicks on the first available seat
    Then  the user clicks on the button "Gå vidare"

  Scenario: Booking an unreserved seat
    And   the user chooses a screening
    When  the user should be able to see available seats
    And   the user clicks on the first available seat
    Then  the user clicks on the button "Gå vidare"

    And  the user confirms their reservation by entering a valid email address
    
  Scenario: Trying to reserve a seat already booked
    And  the user chooses a screening
    When the user should be able to see available seats
    And  the user clicks on the first available seat
    Then the user clicks on the button "Gå vidare"
    And the user clicks on the button "Boka"
    And the user clicks on the button "Boka" again
    And the user should be able to see bokningshistory
    And the user clicks the button "STARTSIDA" and returns to the home page
    And the user selects "Sample Movie" and show time and then clicks "Gå vidare"
    And the user chooses a screening
    And the user clicks on the reserved seat
    And the user clicks on the button
    And the user should receive an alert message "Välj säten innan du fortsätter

