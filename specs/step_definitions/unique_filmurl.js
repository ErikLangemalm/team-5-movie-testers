import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('That I am in the home page', () => {
  cy.visit('/');
  cy.viewport(1000, 1200);
  // TODO: implement step
});

When('I Click on a movie', (movieCard) => {
  cy.wait(1000);
  cy.get('.movieCard.card').first().click({ force: true });
  // TODO: implement step
});

Then('I should be directed from the movie selection to the more detailed movie view', () => {
  // TODO: implement step
  Then('I should be directed from the movie selection to the more detailed movie view', () => {
    
    cy.url().should('include', '/filmbokning');
    cy.get('.movie-details').should('exist');
    cy.get('.movie-title').should('exist');
    cy.get('.movie-details-trailer').should('exist');
  });
// TODO: implement step
});

When('I Check the URL it should contain the movie title in the URL', () => {
  cy.url().should('include', '<movie-title>');
  // TODO: implement step
});


