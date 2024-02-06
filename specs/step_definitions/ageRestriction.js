import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that I am on the start page', () => {
  // TODO: implement step
  cy.visit('/');
  cy.viewport(1000, 1200);
});

Given('I have logged in', () => {
  // TODO: implement step
  let email = "cifap38802@evvgo.com";
  let password = "123456";
  cy.get('#basic-nav-dropdown').click({ force: true });
  cy.get('line-object.text-decoration-none.text-primary.dropdown-item').click({ force: true });
  cy.get('.form-control.with-icon').eq(0).click({ force: true });
  cy.get('.form-control.with-icon').eq(0).type(email);
  cy.get('.form-control.with-icon').eq(1).click({ force: true });
  cy.get('.form-control.with-icon').eq(1).type(password);
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