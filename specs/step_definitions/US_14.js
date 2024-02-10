import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('the user is on the websites main page', () => {
  // TODO: implement step
  cy.visit('/');
  cy.viewport(1000, 1200);
});

Then('the user selects one of the specific movies on the right side of the movie panel', () => {
  // TODO: implement step
  cy.get('.col-xl-5 > .container > .row > :nth-child(1)').should('be.visible')
  cy.wait(2000);
  
});

Then('the user clicks on the time button', () => {
  // TODO: implement step
  cy.get(':nth-child(1) > .screeningContainer > .screeningsBtn').click({ force: true });
});

When('the user selects the date and time and the language of the movie', () => {
  // TODO: implement step
  cy.get(':nth-child(2) > .custom-radio-button').click({ force: true });
  
});

Then('the user clicks to {string} segment', (a) => {
  // TODO: implement step
  cy.get('.screening-list > .confirm-button').click({ force: true });

});

Then('the user selects the {string} and {string} clicks on the button {string}', (a, b, c) => {
  // TODO: implement step
  cy.get('.price-component').should('be.visible')
  cy.get(':nth-child(1) > .counter-container > :nth-child(3)').click({ force: true });
  cy.wait(2000)
  cy.get('.price-component > .confirm-button').click({ force: true });

  

});

Then('the user can see that how many reserved seats live in the screen', () => {
  // TODO: implement step
  cy.get('.default-seat.available-seat:first').click()
  cy.get('.theater-container').should('be.visible')
  cy.get('.theater-container').screenshot()
  
});

Then('the user click on the {string} button', (a) => {
  // TODO: implement step
  cy.get('.company-logo').should('be.visible')
  .click()
});

Then('the user should be redirected back to the main page.', () => {
  // TODO: implement step
  cy.url().should('eq', 'https://filmvisarna-team5.nodehill.se/');

});