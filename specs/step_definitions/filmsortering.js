import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that the user has selected a date', () => {
  cy.get('div.counter-xl > button').eq(1).click();
  cy.get('input.filterScreenings').invoke('css', 'display', 'block').should('be.visible');
});

Given('there is an available movie on the selected date', () => {
  cy.get('.screeningContainer .col-lg-12 .col-md-12 .col-sm-12 .col-12').invoke('css', 'display', 'block').should('be.visible');
});

When('I select a date, I should be given the available movies', () => {
  cy.get('.screeningsBtn.important > button').eq(1).click();
});

Then('I select a movie', () => {
  cy.get('div.custom-radio-button').first().click({ force: true });
  cy.get('input.screening-input').invoke('css', 'display', 'block').should('be.visible');
  cy.get('.confirm-button').first().click();
});

Then('I should be given a time stamp of when the movie starts', () => {
  cy.get('input.screening-input').invoke('css', 'display', 'block').should('be.visible');
});