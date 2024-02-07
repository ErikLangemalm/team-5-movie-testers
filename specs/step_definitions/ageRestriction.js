import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that I am on the start page', () => {
  // TODO: implement step
  cy.visit('/');
  cy.viewport(1000, 1200);
});

Given('I have logged in', () => {
  // TODO: implement step
  let email = "cifap38802@evvgo.com";
  let password = "Password123";
  cy.get('#basic-nav-dropdown').click({ force: true });
  cy.get('a[href="/logga-in"]').click({ force: true });
  cy.get('.form-control.with-icon').eq(0).click({ force: true });
  cy.get('.form-control.with-icon').eq(0).type(email);
  cy.get('.form-control.with-icon').eq(1).click({ force: true });
  cy.get('.form-control.with-icon').eq(1).type(password);
  cy.get('#login-btn').click({ force: true });
  cy.get('.d-flex.justify-content-center.mt-5 .startpage-btn.btn.btn-outline-secondary.py-2.mb-4').click({ force: true });

  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1);
  const dateString = currentDate.toISOString().split('T')[0];
  cy.get('input.filterScreenings').invoke('val', dateString);
});

When('I click on a movie that has an age restriction of 15 years old', () => {
  // TODO: implement step
  cy.get('.d-flex.justify-content-center.row').click({ force: true });
});

When('I click on a screening.', () => {
  // TODO: implement step'
  cy.get('.movieCard.card.col-lg-3.col-md-4.col-sm-6.col-6').first().click({ force: true });
  cy.get('div.custom-radio-button').first().click({ force: true });
  cy.get('.confirm-button').first().click({ force: true });

});

Then('{string} shouldnt be an option.', (a) => {
  // TODO: implement step
  cy.get('.ticket-category > label').eq(2).invoke('text').should('eq', 'Barn, (0-12 år)');
});