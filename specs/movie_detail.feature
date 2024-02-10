Feature: Movie Details Page
  As a user
  I want to go to a details page for a specific movie
  So that I can access more information about the movie (image, trailer, description, cast, director, etc.)

  Background:
    Given I am on the home page

  Scenario: Navigate to Movie Details Page
    When I click on the movie titled "<movieTitle>"
    Then I should be directed to the movie details page

    Examples:
      | movieTitle   | ageLimit | language |
      | Gladiator    | 15 år    | Engelska |
      | Pulp Fiction | 15 år    | Engelska |

  Scenario: View Movie Information
    When I click on the movie titled "<movieTitle>"
    Then I should be directed to the movie details page
    And I should see the following information "<movieTitle>" "<ageLimit>" "<language>"
    And I should see trailer, info text and cast 
    
    Examples:
      | movieTitle   | ageLimit | language | 
      | Gladiator    | 15 år    | Engelska | 
      | Interstellar | 11 år    | Engelska |

  Scenario: Navigate Back to Home Page
    When I click on the movie titled "Gladiator"
    Then I should be directed to the movie details page
    When I click on the "back" button
    Then I should be redirected back to the home page
