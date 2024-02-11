Feature: Prototype for Movie Booking System

  As a system owner
  I want to see a prototype with at least 5 movies, distributed over at least 30 fictional screening dates across our 2 cinema halls

  Scenario: Viewing Prototype with Movies
    Given the system displays the prototype
    Then I should see at least 5 movies listed

  Scenario: Movie Screening Dates
    Given the system displays the prototype again
    When I view the details of a movie
    Then the system should be able to show 30 viewing dates accross 2 movie halls
