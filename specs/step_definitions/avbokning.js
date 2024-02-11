import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('user is in the filmvisare site', () => {
  cy.log('Visiting the site');
  cy.visit('/');
  cy.viewport(1000, 1200);
});


Then('clicks button that says "Logga in"', () => {
  cy.get('.bi-person-circle').should('be.visible').click();
  cy.contains('Logga in').should('be.visible').click();
});

Given('the user has already pre booked a seat', () => {
  cy.visit('/prebooked-seat');
  cy.get('.seat-selector').first().click();
  cy.get('#confirm-booking').click();
});

When('User logs into the website using gmail and password', () => {
  let email = "destiny123456john@gmail.com";
  cy.get('.form-control.with-icon[type="email"]').should('be.visible').clear().type(email);
  let password = "pvt1234K";
  cy.get('.form-control.with-icon[type="password"]').should('be.visible').clear().type(password);
  cy.get('.login-btn.ms-2').should('be.visible').click();
});

Then('user proceeds to go into bookings', () => {
});

