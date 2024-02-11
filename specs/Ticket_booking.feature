Feature: Ticket Booking
  As a visitor
  I want to be able to book tickets with different prices
  So that I can take advantage of lower prices for seniors and children:
  - Adult: 140 SEK
  - Senior: 120 SEK
  - Child: 80 SEK

  Background:
    Given I am on the home page

  Scenario: Book Ticket for ticket type "<ticketType>" from movie detail page
    And I click on the movie titled "Gladiator"
    And I choose my desired show time and proceed
    And I select "<ticketType>" as the ticket type with quantity of "<quantity>"
    And I can see total price "<totalPrice>"
    And I click the confirm button
    And I reserve a seat
    And I enter my email at confirmation stage and proceed
    Then I should see confirmation booking alert box
    Then I should see confirmation screen
    And I can see my booking details
    #This test will run for 4 times depending on ticket type, i skipped the last 3, since
    #we have limited bookings, currently I am not able to see current booking in my bookings (BUG)
    Examples:
      | ticketType | quantity | totalPrice |
      | Adult      | 1        | 140 kr     |
  #| Senior     |   1            | 120 kr    |
  #| Child      |   1            | 80 kr     |
  #| Adult      |  2             | 280 kr |

  Scenario: Book Tickets for Two Adults and One Child
    And I click on the movie titled "Gladiator"
    And I choose my desired show time and proceed
    When I select "Adult" as the ticket type with quantity of "2"
    And I select "Child" as the ticket type with quantity of "1"
    Then I can see total price "360"

  Scenario: Book Tickets for Two Adults and One Child
    And I click on the movie titled "Gladiator"
    And I choose my desired show time and proceed
    When I select "Adult" as the ticket type with quantity of "1"
    And I select "Senior" as the ticket type with quantity of "1"
    And I select "Child" as the ticket type with quantity of "1"
    Then I can see total price "340"
