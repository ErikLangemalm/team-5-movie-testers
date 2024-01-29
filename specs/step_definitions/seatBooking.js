import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that I am on the first page', () => {
  // TODO: implement step
  cy.visit('/');
});

When('I click on a timeslot', () => {
  // TODO: implement step
  cy.get('div.screeningContainer button').first().click({force: true});
});

When('I click on a specifik timeslot', () => {
  // TODO: implement step
  cy.get('div.custom-radio-button').first().click({ force: true });
  cy.get('input.screening-input').invoke('css', 'display', 'block').should('be.visible');
  cy.get('.confirm-button').first().invoke('show').click()
});

When('I reserve a seat', () => {
  // TODO: implement step
});

When('I select {string}', (a) => {
  // TODO: implement step
});

When('I select a seat', () => {
  // TODO: implement step
});

Then('That seat should be unavailable for other users(repeat and verify previous steps).', () => {
  // TODO: implement step
});