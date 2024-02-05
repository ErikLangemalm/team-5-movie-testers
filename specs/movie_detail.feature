Feature: Movie Details Page
  As a user
  I want to go to a details page for a specific movie
  So that I can access more information about the movie (image, trailer, description, cast, director, etc.)

  Background:
    Given I am on the home page

  Scenario: Navigate to Movie Details Page
    When I click on the movie titled "Example Movie"
    Then I should be directed to the movie details page

  Scenario: View Movie Information
    Given I am on the movie details page for "Example Movie"
    When I look at the page content
    Then I should see the following information:
  - Movie image
  - Trailer (embedded or link)
  - Descriptive text about the movie
  - Genre
  - List of cast members
  - Director's name

  Scenario: Navigate Back to Home Page
    Given I am on the movie details page for "Example Movie"
    When I click on the "Back" button or a similar navigation element
    Then I should be redirected back to the home page
