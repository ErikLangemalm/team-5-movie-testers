Feature: Prototype
  As the system manager
  I want to be able to see a prototype with at least 5 movies distributed
  over 30 dates/times in our 2 movie saloons

  Scenario Outline: Displaying a prototype with 5 different movies across 30 viewing dates
    Given I am scrolling for movies as the system manager
    When I choose to view the prototype in the system
    Then I should see a display with 5 movies across 30 viewing dates
    And I should then be able to see the following information, Movie name and Viewing Dates
       Examples:
      | Film Title            | Viewing Dates          |
      | Gladiator             | 1/2-24 - 22/2-24       |
      | Pulp Fiction          | N/AN                   |
      | Interstellar          | 3/2-24 - 24/2-24       |
      | Shawshank Redemption  | N/AN                   |
      | Happy Gilmore         | 1/2-24 - 22/2-24       |


  Scenario Outline: Displaying a prototype with 5 different movies if there are seats and viewing dates available
    Given I am scrolling for movies as the system manager
    When I choose to view the prototype in the system
    Then I should see a display with 5 movies across 30 viewing dates including more detailed information
    And I should then be able to see the following information: Movie name and Viewing Dates for available movies

    Examples:
      | Film Title            | Viewing Dates          |
      | Gladiator             | 1/2-24 - 22/2-24       |
      | Pulp Fiction          | 5/2-24 - 26/2-24       |
      | Interstellar          | 3/2-24 - 24/2-24       |
      | Shawshank Redemption  | 4/2-24 - 25/2-24       |
      | Happy Gilmore         | 1/2-24 - 22/2-24       |
