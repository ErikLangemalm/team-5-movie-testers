Feature: Filter of movies to know what movies are a available at a particuler time

  Background:
    Given that the website is up and running
    And it isn't crashing or displaying error syntax

  Scenario Outline: Available movies:
    Given that the user has selected a date
    And there is an available movie on the selected date
    When i select a date i should be given the available movies <availablemovies>
    Then i select a movie
    And I should be given a time stamp of when the movie start

    Examples:
      | Star Wars | 21:00 | 2024-01-25 |
      | Gladiator | 21:00 | 2024-02-01 |


