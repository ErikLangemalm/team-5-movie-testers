import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that I am on the first page', () => {
  cy.visit('/');
  cy.viewport(1000, 1200);
});

Given('that the user is new and wants to be a member', () => {
  cy.get('filterScreenings').should('exist')
  cy.get('div.basic-nav-dropdown').first().click({ force: true });
  // TODO: implement step
});

When('user has now registered with a valid gmail and meets the password criteria', () => {
  let email = "klopp@gmail.com";
  let password = "yourPassword";
  cy.get('.form-control.with-icon').click().type(email);
  cy.get('.form-control.with-icon').click().type(password);
  // TODO: implement further steps for registration
});

When('user registers, user should get confirmation message', () => {
  // TODO: add assertions for confirmation message
});

Then('user should be able to use registered gmail and password and the {string} feature', (feature) => {
  let email = "klopp@gmail.com";
  let password = "yourPassword";
  cy.get('.form-control.with-icon').click().type(email);
  cy.get('.form-control.with-icon').click().type(password);
  cy.get('.confirm-button').first().click();
  // TODO: add assertions for the feature
});

Then('user should be able to use the login feature with the remembered credentials', () => {
  cy.get('.input.form-check-input').click();
  // TODO: add assertions for successful login with remembered credentials
});
