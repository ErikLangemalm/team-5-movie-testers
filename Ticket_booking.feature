Feature: Ticket Booking
  As a visitor
  I want to be able to book tickets with different prices
  So that I can take advantage of lower prices for seniors and children:
  - Adult: 140 SEK
  - Senior: 120 SEK
  - Child: 80 SEK

  Background:
    Given I am a visitor on the ticket booking page

  Scenario: Book Ticket for "<ticketType>"
    When I select "<ticketType>" as the ticket type
    And I proceed with the booking process
    Then I the price should be "<price>"
    And my booking should be confirmed
    Examples:
      | ticketType | price   | 
      | Adult      | 140 SEK | 
      | Senior     | 120 SEK |
      | Child      | 80 SEK  |

  Scenario: Book Tickets for Two Adults and One Child
    When I select "Adult" as the ticket type
    And I enter a quantity of 2
    And I select "Child" as the ticket type
    And I enter a quantity of 1
    And I proceed with the booking process
    Then I should see the total cost of (2 * 140 SEK + 1 * 80 SEK)
    And my booking should be confirmed
    #if i choose multiple ticket types in one booking it should show me the total cost 


  #Scenario: Choose Film Type and Time before Ticket Booking
   # When I do not select the film type 
    #And I do not select the screening time 
    #And I click on the "Continue" button
    #Then It should not be redirected to the ticket booking page
