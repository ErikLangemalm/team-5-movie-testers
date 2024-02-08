Feature: Movie Trailers
As a user
I want to be able to watch trailers of all available movies
So that I can decide before booking a ticket
  Background:
    Given  I am on the home page

  Scenario: User can watch movie trailers in embeded view
    When I click on the movie titled "<movieTitle>"
    Then I should be directed to the movie details page
    When I click the play trailer button 
    Then I should watch the trailer
    Examples:
    | movieTitle  |
    | Gladiator   |

  Scenario: User can watch movie trailers on youtube
    When I click on the movie titled "Gladiator"
    Then I should be directed to the movie details page
    When I click on watch on youtube button
    Then It should redirected to youtube
    And  I could watch trailer on youtube