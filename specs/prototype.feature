Feature: Prototype
  As the system manager
  I want to be able to see a prototype with at least 5 movies distributed
  over 30 dates/times in our 2 movie saloons

  Background:
    Given that I'm scrolling for available movies

  Scenario Outline: Displaying a prototype with 5 different movies across 30 viewing dates
    Given I am scrolling for movies as the system manager
    When I choose to view the prototype in the system
    Then I should see a display with 5 movies across 30 viewing dates
    And I should then be able to see the following information, Movie name, Movie Theater, Viewing Dates

    Examples:
      | Film Title            | Movie Theater | Viewing Dates          |
      | Gladiator             | Salong1       | 1/2-24 - 22/2-24       |
      | Pulp Fiction          | Salong2       | 5/2-24 - 26/2-24       |
      | Interstellar          | Salong1       | 3/2-24 - 24/2-24       |
      | Shawshank Redemption | Salong2       | 4/2-24 - 25/2-24       |
      | Happy Gilmore         | Salong1       | 1/2-24 - 22/2-24       |


  Scenario Outline: Displaying a prototype with 5 different movies across 30 viewing dates with more detailed information
    Given I am scrolling for movies as the system manager
    When I choose to view the prototype in the system
    Then I should see a display with 5 movies across 30 viewing dates including more detailed information
    And I should then be able to see the following information: Movie name, Genre, Duration, Movie Theater, Viewing Dates

    Examples:
      | Film Title            | Genre                          | Duration | Movie Theater | Viewing Dates          |
      | Gladiator             | Adventure, Drama, Action       | 2h 35min | Salong1       | 1/2-24 - 22/2-24       |
      | Pulp Fiction          | Detective, Action              | 2h 34min | Salong2       | 5/2-24 - 26/2-24       |
      | Interstellar          | Sci-Fi, Adventure, Drama       | 2h 49min | Salong1       | 3/2-24 - 24/2-24       |
      | Shawshank Redemption | Drama                          | 2h 24min | Salong1       | 4/2-24 - 25/2-24       |
      | Happy Gilmore         | Comedy, Sport                  | 1h 32min | Salong2       | 1/2-24 - 22/2-24       |
