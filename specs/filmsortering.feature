Feature: Filter of movies to know what movies are a available at a particuler time

  Background:
    Given user is on the person is on the first page 

  Scenario Outline: Available movies:
    Then there is an available movie on the selected date
    Then i select a date i should be given the available movies <availablemovies>

    Examples:
      | Star Wars | 21:00 | 2024-01-25 |
      | Gladiator | 21:00 | 2024-02-01 |


