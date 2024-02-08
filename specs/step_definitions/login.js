import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given('that I am on the first page', () => {
  cy.visit('/');
  cy.viewport(1000, 1200);
});

Given('that the user is new and wants to be a member', () => {
  cy.get('div.basic-nav-dropdown').first().click({ force: true });
  // TODO: implement step
});

When('user has now registered with a valid gmail and meets the password critirias', () => {
  let email = "klopp@gmail.com"
  cy.get('.form-control with-icon').click();
  cy.get('.form-control with-icon').type(email);
  cy.get('form-control with-icon').click(password)
});

When('user registers user should get confirmation message', () => {
});

Then('user should be able to use registered gmail and password and the {string} feature', (a) => {
  let email = "klopp@gmail.com"
  cy.get('.form-control with-icon').click();
  cy.get('.form-control with-icon').type(email);
  cy.get('form-control with-icon').click(password)
  cy.get('.confirm-button').first().click()
});

Then('user should be able to use the login feature with the remebered credentials', () => {
  cy.get('.input.form-check-input').click();
});




