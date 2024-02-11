Feature: See reserved seats live 
  As a visitor, I want to be able to see unreserved seats live after clicking planned day's movie

  Background:
    Given the user is on the websites main page

  Scenario: Navigate to Movie Details Page on the base of day you are selecting

    Then the user selects one of the specific movies on the right side of the movie panel
    And  the user clicks on the time button
    When the user selects the date and time and the language of the movie
    Then the user clicks to "Gå vidare" segment
    And  the user selects the "biljettyp" and "antal" clicks on the button "Gå vidare"
    Then the user can directly see how many total available seats there are


  Scenario: Navigate Back to Home Page
    Then the user click on the "FILMVISARNA" button
    Then the user should be redirected back to the main page.