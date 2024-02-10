Feature: Prevent booking already reserved seats

  Background:
    Given the user is on the websites start page
    And   the user selects movie and show time and then clicks "Gå vidare"
    
  Scenario: Booking an unreserved seat
    Given  the user selects the "vuxen" and "1"  clicks on the button "Gå vidare"
    When  the user should be able to see available seats
    And   the user clicks on the first available seat
    Then  the user clicks on the button "Gå vidare" 
    And   the user should be able to see mail box
    
    
  Scenario: Trying to reserve a seat already booked
    Given the user selects the "1 vuxen" and clicks on the button "Gå vidare"
    When the user should be able to see available seats plats
    And  the user clicks on the first available seat button
    Then the user clicks on the button "Gå vidare" in the seat box
    And  the user confirms their reservation by entering a valid email address
    And  the user clicks on the button "Boka" in the mail box
    And  the user clicks on the button "Boka" again
    And  the user should be able to see bokningshistory
    And  the user clicks the button "STARTSIDA" and returns to the home page
    And  the user selects "Sample Movie" and show time then clicks "Gå vidare"
    And  the user selects the "1 vuxen" and clicks on the button "Gå vidare" in the seat box
    And  the user clicks on the reserved seat
    And  the user clicks on the button
    And  the user stays in the same tab

