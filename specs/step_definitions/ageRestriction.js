import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that I am on the start page', () => {
  // TODO: implement step
  cy.visit('/');
  cy.viewport(1000, 1200);
});

Given('I have logged in', () => {
  // TODO: implement step
  cy.get('#basic-nav-dropdown').click({ force: true });
  cy.get('line-object.text-decoration-none.text-primary.dropdown-item').click({ force: true });
  cy.get('.form-control.with-icon').click({ force: true })
});

When('I click on a movie that has an age restriction of 15 years old', () => {
  // TODO: implement step
});

When('I click on a screening.', () => {
  // TODO: implement step
});

Then('{string} shouldnt be an option.', (a) => {
  // TODO: implement step
});