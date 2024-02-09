import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that I successfully bought my tickets', () => {
  cy.visit('/payment');
});

Then('I should be directed from the payment screen to the booking confirmation screen', () => {
  cy.url().should('include', '/bokningsbekraftelse');
});

Given('I am on my preferred email app', () => {

  cy.visit('https://example.com/email');
});

When('I check my unread emails', () => {

});

Then('I should see an email from {string} containing the following information:', (sender) => {

 
});
