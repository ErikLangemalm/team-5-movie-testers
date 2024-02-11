Feature: User login and features

  Background:
    Given that the website is up and running

  Scenario: User logs in with valid credentials
    When the user clicks on the profile icon
    Then clicks on the "Logga in" button
    Then enters the email "destiny123456john@gmail.com"
    Then enters the password "pvt1234K"
    Then clicks the login button
    Then the user should be logged in
