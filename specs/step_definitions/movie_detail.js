import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import baseUrl from "../../baseUrl";

Given('I am on the home page', () => {
  cy.visit('/');
});

When('I click on the movie titled {string}', (movieName) => {
  cy.get('.mb-4.container>div>div')
    .should("be.visible")
    .contains(movieName)
    .click({ force: true });
});

Then('I should be directed to the movie details page', () => {
  cy.url().should('include', '/filmbokning/');
  cy.get('.movie-details-trailer')
    .should("be.visible")
});

Then('I should see the following information {string} {string} {string}', (movieTitle, ageLimit, language) => {
 
  cy.get(' div.col-lg-6.col-xl-7.col-xxl-8 >div').should('contain', movieTitle)
  cy.get('div.movie-details-box').should('contain', ageLimit);
  cy.get('div.movie-details-box').should('contain', language);

});

And('I should see trailer, info text and cast', () => {
  cy.get('.movie-details-trailer').should('exist')
  cy.get('.movie-details-desc').should('not.be.empty')
  cy.get('.movie-details-actors').should('not.be.empty')

  } )


When('I click on the {string} button', (backButton) => {
cy.go(backButton)
});

Then('I should be redirected back to the home page', () => {
  cy.url().should('eq', baseUrl)
});