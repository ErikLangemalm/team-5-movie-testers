import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let sharedUrl;

Given('the system owner navigates to the home page', () => {
  cy.visit('/');
  cy.viewport(1000, 1200);
  cy.wait(3000);
});

Then('clicks on a movie', () => {
  cy.get('.pMovieTitle').contains('Interstellar').click();
  cy.wait(3000);
});

Then('the system owner checks that each movie has a unique URL', () => {
    cy.url().then(firstUrl => {
    cy.go('back');
    cy.get('.pMovieTitle').contains('Gladiator').click();
    cy.url().should('not.equal', firstUrl).then(secondUrl => {
    expect(firstUrl).not.equal(secondUrl);
    });
});
});

Given('the visitor navigates to a specific Movie', () => {
    cy.visit('/');
    cy.viewport(1000, 1200);
    cy.wait(3000);
    cy.get('.pMovieTitle').contains('Star Wars: Episode...').click();
    cy.wait(3000);
});

Then('the visitor shares the URL with a friend', () => {
    cy.url().then(url => {
        sharedUrl = url;
        cy.log('Movie URL:', sharedUrl);
        cy.wait(3000);
      });
});

Then('the friend should be able to access the same Movie by visiting the shared URL', () => {
    cy.visit(sharedUrl);
});
