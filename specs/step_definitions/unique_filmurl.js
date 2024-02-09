import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('That I am in the home page', () => {
  cy.visit('/');
  cy.viewport(1000, 1200);
  // TODO: implement step
});

When('I Click on a movie', () => {
  cy.get('.movieCard.card').first().click({ force: true });
  // TODO: implement step
});

Then('I should be directed from the movie selection to the more detailed movie view', () => {
  // TODO: implement step
  Then('I should be directed from the movie selection to the more detailed movie view', () => {
    cy.url().should('include', '/detailed-movie-view');
    cy.get('.movie-details').should('exist');
    cy.get('.movie-title').should('exist');
    cy.get('.movie-description').should('exist');
  });

  
});

Given('That I am in the detailed movie view', () => {
  // TODO: implement step
});

When('I Check the URL it should contain the movie title in the URL', () => {
  // TODO: implement step
  cy.url().should('include', '<movie-title>');
});

When('I should then be able to see following information:', (dataTable) => {
  // TODO: implement step
  // You can use assertions to verify the presence of the information based on the data in 'dataTable'
});
