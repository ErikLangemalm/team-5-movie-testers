import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that I am on the first page', () => {
  // TODO: implement step
  cy.visit('/');
  cy.viewport(1000, 1200);
});

When('I click on a timeslot', () => {
  // TODO: implement step
  cy.get('div.screeningContainer button').first().click({force: true});
});

When('I click on a specifik timeslot', () => {
  // TODO: implement step
  cy.get('div.custom-radio-button').first().click({ force: true });
  cy.get('input.screening-input').invoke('css', 'display', 'block').should('be.visible');
  cy.get('.confirm-button').first().click()
});

When('I reserve a seat', () => {
  // TODO: implement step
  cy.get();
});

When('I select {string}', (vuxen) => {
  // TODO: implement step
});

When('I select a seat', () => {
  // TODO: implement step
});

Then('That seat should be reserved for me under the bookings tab.', () => {
  // TODO: implement step
});