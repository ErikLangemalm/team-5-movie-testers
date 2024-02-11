import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

Given('I successfully buy my tickets', () => {
  cy.visit('/');
  cy.viewport(1000, 1200);
  cy.wait(3000)

  cy.contains('.pMovieTitle', 'The Usual Suspects').click();
  cy.wait(1000)

  cy.contains('.custom-radio-button', 'Lördag, 2024-01-27, 18:00, Eng tal, Sve text').click({ force: true });
  cy.contains('button', 'Gå vidare').click({ force: true })
  cy.wait(2000)

  cy.get('div.counter-container > button').eq(1).click({ force: true });
  cy.wait(1000)

  cy.get('.price-component > .confirm-button').click({ force: true })
  cy.get('.theater-container').each(($row, rowIndex) => {
    cy.wrap($row).find('.default-seat.available-seat').first().click({ force: true });
  });

  cy.get('.accordion-body .confirm-button').eq(2).click({ force: true });
  let email = 'titotest@gmail.com'
  cy.get('input.form-control').type(email);
  cy.get('form > button').eq(1).click({ force: true });
  cy.get('.modal-content').should('be.visible').contains('button', 'Boka').click();
  cy.wait(5000);
});
Then('I should be directed from the payment screen to the booking confirmation screen', () => {
  cy.url().should('include', '/bokningsbekraftelse');
});

Then('I should then be able to see the following information:', () => {
  cy.get('.table-dark.table-border').should('be.visible');
  cy.get('.table-dark.table-border').contains('td.tdata-left', 'Bokningsnummer:').next('td.tdata-right').should('be.visible');
  cy.get('.table-dark.table-border').contains('td.tdata-left', 'Film:').next('td.tdata-right').should('be.visible');
  cy.get('.table-dark.table-border').contains('td.tdata-left', 'Datum:').next('td.tdata-right').should('be.visible');
  cy.get('.table-dark.table-border').contains('td.tdata-left', 'Plats:').next('td.tdata-right').should('be.visible');
  cy.get('.table-dark.table-border').contains('td.tdata-left', 'Pris (betalning sker på plats):').next('td.tdata-right').should('be.visible');
  cy.wait(1000);
});

Then('I log in into the page', () => {
  cy.get('#basic-nav-dropdown').click();
  cy.get('a[data-rr-ui-dropdown-item][href="/logga-in"]').click();
  let email1 = 'titotest@gmail.com'
  let password = 'Password123'
  cy.get('input[name="emailInput"]').click({ force: true }).type(email1);
  cy.get('input[type="password"]').click({ force: true }).type(password);
  cy.get('button[id="login-btn"]').click();
  cy.wait(3000);
});

Then('I check mina bokningar', () => {
  cy.url().should('include', '/bokningar');
  cy.wait(3000);
});

Then('I should then be able to see my bookings with the necessary information', () => {
  cy.get('.mb-4.table-dark').should('be.visible');
  cy.get('.d-flex.justify-content-between.my-3').contains('div', 'Film').next('.booking-info').should('be.visible');
  cy.get('.d-flex.justify-content-between.my-3').contains('div', 'Datum').next('.booking-info').should('be.visible');
  cy.get('.d-flex.justify-content-between.my-3').contains('div', 'Plats').next('.booking-info').should('be.visible');
  cy.get('.d-flex.justify-content-between.my-3').contains('div', 'Kostnad').next('.booking-info').should('be.visible');
});
