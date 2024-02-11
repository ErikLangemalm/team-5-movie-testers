import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('the system displays the prototype', () => {
  cy.visit('/');
  cy.viewport(1000, 1200);
  cy.wait(3000);
});

Then('I should see at least 5 movies listed', () => {
  cy.get('.d-flex.justify-content-center.row')
    .find('.movieCard.card.col-lg-3.col-md-4.col-sm-6.col-6')
    .should('have.length.at.least', 5);
    cy.wait(1000);

});

Given('the system displays the prototype again', () => {
  cy.visit('/');
  cy.viewport(1000, 1200);
  cy.wait(3000);
});

When('I view the details of a movie', () => {
  cy.contains('.pMovieTitle', 'The Usual Suspects').click();
  cy.wait(1000);
});

Then('the system should be able to show 30 viewing dates accross 2 movie halls', () => {
  cy.get('.accordion-body .choose-screening')
    .should('have.length.at.least', 30);
  cy.wait(1000);
});
