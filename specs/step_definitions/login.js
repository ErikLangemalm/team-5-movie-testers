import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

beforeEach(() => {
  cy.visit('/');
  cy.viewport(1000, 1200);
  cy.wait(3000)
});

Given('that the website is up and running', () => {
});

When('the user clicks on the profile icon', () => {
  cy.get('.bi-person-circle').should('be.visible').click();
});

Then('clicks on the "Logga in" button', () => {
  cy.contains('Logga in').should('be.visible').click();
});

Then('enters the email "destiny123456john@gmail.com"', () => {
  let email = "destiny123456john@gmail.com";
  cy.get('.form-control.with-icon[type="email"]').should('be.visible').clear().type(email);
});

Then('enters the password "pvt1234K"', () => {
  let password = "pvt1234K";
  cy.get('.form-control.with-icon[type="password"]').should('be.visible').clear().type(password);
});

Then('clicks the login button', () => {
  cy.get('.login-btn.ms-2').should('be.visible').click();
});

Then('the user should be logged in', () => {

});





