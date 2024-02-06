Feature: Login and take part of the features as a logged in user

  Background:
    Given that the website is up and running
    And it isn't crashing or displaying error syntax

  Scenario: User login succesful
    Given that the user is new and wants to be a member
    And has now registered with a valid gmail and meets the password critirias
    When user registers user should get confirmation message
    Then user should be able to use registered gmail and password and the "Remember me" feature
    And user should be able to use the login feature with the remebered credentials

  Scenario: User login unsuccesful
    Given that the user wants to become a new member
    And has chosen an email and a short password and does not meet the psw critirias
    When user tries to log in user receives a message that password was not accepted


