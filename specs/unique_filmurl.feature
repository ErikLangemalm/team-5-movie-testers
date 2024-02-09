Feature: Unique Film Url
  As a visitor
  I want to see a unique URL for the preferred movie
  So that I can bookmark it and book tickets later or for saving purposes

  Scenario: Click on Movie
    Given That I am scrolling for movies
    When I Click on a movie title 
    Then I should be directed from the movie selection to the more detailed movie view
    And I should then be able to see the following information:
    When I Check the URL, it should contain Movie Title, for example "https://filmvisarna-team5.nodehill.se/filmbokning/<movie-title>" 
    | Movie name |
    | Time and date |
    | Movie image |
    | Trailer |

  Scenario: Checking If it's the right movie
    Given That I am in the detailed movie view
    When I Check the URL, it should contain Movie Title, for example "https://filmvisarna-team5.nodehill.se/filmbokning/<movie-title>" 
    Then I check if the <movie-title> in the URL Matches with the one of the <movie-title>
    And I should then be able to see the following information:
    | Movie name |
    | Time and date |
    | Movie image |
    | Trailer |
