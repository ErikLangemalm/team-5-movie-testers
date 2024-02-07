Feature: User Bookings and Booking History

  Background:
    Given the user is logged in
    
  Scenario: User can see uppcoming bookings
    And the user has booked "<movieTitle>" movie
    When the user navigates to the "Bokningar" section
    Then the user should see movie detail with "<bookingNummber>" "<movieTitle>" "< date >" "<Status>"
    Examples:
      | bookingNummber   | movieTitle             | date                      |   status  |  | sittingPlace            | 
      | ZG91             | Gladiator              | 21:00, sön, 2024-02-11    | Confirmed |  | salong 2, Rad 3, plats:5|  

  Scenario: User views booking history
    And the user has following movies in history
      | movieTitle         | Date                 | 
      | Interstellar       | fre,2024-01-19       |   
      | Gladiatorons       | ons,2024-01-17       |
      | The usual suspects | lör,2024-01-27       |
    When the user navigates to the "Bokningar" section
    Then the user should see a history of all bookings
    And the user should see the details of each booking
      | movieTitle         | Date           |
      | Interstellar       | fre,2024-01-19 |
      | Gladiatorons       | ons,2024-01-17 |
      | The usual suspects | lör,2024-01-27 |
     
  Scenario: User has no bookings
    Given the user has no upcoming bookings
    When the user navigates to the "Bokningar" section
    Then the user should see a message indicating that you do not have any uppcoming bookings
    And the user should not see any booking details
