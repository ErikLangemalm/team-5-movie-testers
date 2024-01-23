Feature: Book a ticket
    As a user I want to be able to book a ticket so that I can travel.

  Scenario: Book a one way ticket - part 1
    Given that I am on the first page
    And that I have accepted the cookie settings
    When I click on Sök resa
    Then I can see the page where you can choose your departure and destination station
