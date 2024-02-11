import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

Given('the user is on the websites home page', () => {
  // TODO: implement step
  cy.visit('/');
  cy.viewport(1000, 1200);
});


And('user selects {string} and show time and then clicks continue', (a) => {
  // TODO: implement step
  cy.get(':nth-child(1) > .pMovieTitle').click();
  cy.get(':nth-child(2) > .custom-radio-button').click();
  cy.get('.screening-list > .confirm-button').click();
});

Then('the user selects the {string} and {string} and clicks on the button {string}', (a, b, c) => {
  // TODO: implement step
    cy.get(':nth-child(1) > .counter-container > :nth-child(3)').click();
});

Then('the system displays the available {string} for the selected showtime', (a) => {
  // TODO: implement step
  cy.get('.price-component > .confirm-button').click();
  
});

Then('the user clicks on one of the first {string}', (a) => {
  // TODO: implement step
  cy.get('.default-seat.available-seat').should('be.visible')
  
});

Then('the user verify that {string} are clickable', (a) => {
  // TODO: implement step
  cy.get('.default-seat.available-seat:first').click()
});

Then('the user selects the {string} and {string} and clicks on the {string}', (a, b, c) => {
  cy.get(':nth-child(1) > .counter-container > :nth-child(3)').click()
  cy.get('.price-component > .confirm-button').click()
});

Then('the user clicks on the {string} button and all seats are occupied.', (a) => {
  // TODO: implement step
  cy.get('.flex-space-between > .confirm-button').click()
});

Then('the user should get an alert message {string}', (alertText) => {
  // TODO: implement step

  const stub = cy.stub()
  cy.on('window:alert', stub)
  cy.get('.flex-space-between button').contains('Gå vidare').click().then(() => {
      expect(stub.getCall(0)).to.be.calledWith(alertText)
    })
});

