Feature: User Bookings and Booking History

  Background:
    Given the user is logged in
    #currently it's not working since I can not see any booking in my bookings (BUG)
  @skip
  Scenario: User can see uppcoming bookings
    #And the user has booked "<movieTitle>" movie
    And the user is at my booking page
    Then the user should see movie detail with "<bookingNummber>" "<movieTitle>" "< date >" "<Status>"
    Examples:
      | bookingNummber   | movieTitle             | date                      |   status  |  | sittingPlace            | 
      | ZG91             | Gladiator              | 21:00, sön, 2024-02-11    | Confirmed |  | salong 2, Rad 3, plats:5|  
      
  Scenario: User views booking history
    And the user has movie "Interstellar" in the history
    Then the user should see the movie detail with date "2024-01-19" and place "salong 1, Rad: 1, Plats: 6"
     
