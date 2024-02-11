import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that the website is up and running', () => {
  cy.visit('/');
  cy.viewport(1000, 1200);
});

Given('that the user has already pre booked a seat', () => {
  cy.get('div.custom-radio-button').first().click({ force: true });
  cy.get('input.screening-input').invoke('css', 'display', 'block').should('be.visible');
  cy.get('.confirm-button').first().click()
  cy.get('div.counter-container > button').eq(1).click();
  cy.get('div > .confirm-button').first().click({ force: true });
});

Given('has earlier received a confirmation email', () => {
  // TODO: implement step
});

When('User logs into the website using gmail and password', () => {
  let email = "klopp@gmail.com";
  let password = "yourPassword";
  cy.get('.form-control.with-icon').click().type(email);
  cy.get('.form-control.with-icon').click().type(password);
});

When('user proceeds to go into bookings', () => {
  cy.get('div.mb-4 table-dark > button').eq(1).click();
  cy.get('div > .cancel-booking-btn').first().click({ force: true });
});

Then('user should see previosly booked dates and should be given the option too onbook a specific movie', () => {
  // TODO: implement step
});