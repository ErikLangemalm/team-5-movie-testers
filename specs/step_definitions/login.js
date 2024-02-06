import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

/* No duplicate steps, this one already in avbokning.js
Given('that the website is up and running', () => {});*/

/* No duplicate steps, this one already in avbokning.js
Given('it isn't crashing or displaying error syntax', () => {});*/

Given('that I am on the first page', () => {
  cy.visit('/');
  cy.viewport(1000, 1200);
});

Given('that the user is new and wants to be a member', () => {
  cy.get('div.basic-nav-dropdown').first().click({ force: true });
  // TODO: implement step
});

When('user has now registered with a valid gmail and meets the password critirias', () => {
  // TODO: implement step
});

When('user registers user should get confirmation message', () => {
  // TODO: implement step
});

Then('user should be able to use registered gmail and password and the {string} feature', (a) => {
  // TODO: implement step
});

Then('user should be able to use the login feature with the remebered credentials', () => {
  // TODO: implement step
});

Given('that the user wants to become a new member', () => {
  // TODO: implement step
});

Given('has chosen an email and a short password and does not meet the psw critirias', () => {
  // TODO: implement step
});

When('user tries to log in user receives a message that password was not accepted', () => {
  // TODO: implement step
});