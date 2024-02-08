Feature: Unique Film Url
  As a visitor
  I want to see a unique url for the prefered movie
  So that i can then bookmark it and book tickets later or for saving purposes

  Background:
    Given that im scrolling for movies available

  Scenario: Click on Movie
    Given That I am scrolling for movies
    When I Click on a movie
    Then I should be directed from the movie selection to the more detailed movie view
    And I should then be able to see following information:
  - Movie name
  - Time and date
  - Movie image
  - Trailer
  - URL should contain Movie Title, an example "https://filmvisarna-team5.nodehill.se/filmbokning/gladiator"

  Scenario: Checking If its the right movie
    Given That I am in the detailed movie view
    When I Check the URL it should contain the movie title in the URL
    And I should then be able to see following information:
- Movie name
- Time and date
- Movie image
- Trailer
- URL should contain Movie Title, an example "https://filmvisarna-team5.nodehill.se/filmbokning/gladiator"


  
