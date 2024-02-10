import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('the user is on the websites start page', () => {
  // TODO: implement step
  cy.visit('/');
  cy.viewport(1600, 1800);
});

Given('the user selects movie and show time and then clicks {string}', (a, b) => {
  // TODO: implement step
  cy.get(':nth-child(1) > .pMovieTitle').should('be.visible').click()
  cy.get(':nth-child(2) > .custom-radio-button').click()
  cy.get('.screening-list > .confirm-button').click()
  
});

Given('the user selects the {string} and {string}  clicks on the button {string}', (a, b, c) => {
  // TODO: implement step
  cy.get(':nth-child(1) > .counter-container > :nth-child(3)').click()
  cy.get('.price-component > .confirm-button').click();
  
});

When('the user should be able to see available seats', () => {
  // TODO: implement step
  cy.get('.default-seat.available-seat').should('be.visible')
});

When('the user clicks on the first available seat', () => {
  // TODO: implement step
  cy.get('.default-seat.available-seat:first').click()
});

Then('the user clicks on the button {string}', (a) => {
  // TODO: implement step
  cy.get('.price-component > .confirm-button').click({ force: true })
  cy.wait(3000)
});

Then('the user should be able to see mail box', () => {
  // TODO: implement step
  cy.get(':nth-child(4) > .accordion-header > .accordion-button').contains('Bekräfta').should('be.visible')
});

Given('the user selects the {string} and clicks on the button {string}', (a, b) => {
  // TODO: implement step
  cy.get(':nth-child(1) > .counter-container > :nth-child(3)').click()
  cy.get('.price-component > .confirm-button').click();
});

When('the user should be able to see available seats plats', () => {
  // TODO: implement step
  cy.get('.default-seat.available-seat').should('be.visible')
});

When('the user clicks on the first available seat button', () => {
  // TODO: implement step
  cy.get('.default-seat.available-seat:first').click()

});

Then('the user clicks on the button {string} in the seat box', (a) => {
  // TODO: implement step
  cy.get('.flex-space-between > .confirm-button').click()
});

Then('the user confirms their reservation by entering a valid email address', () => {
  // TODO: implement step
  let email = "kubra123@gmail.com";
  cy.get('.accordion-body').find('input[type="email"]').type(email).click({ force: true })
});

Then('the user clicks on the button {string} in the mail box', (a) => {
  // TODO: implement step
  cy.get('#booking-btn').click()
});

Then('the user clicks on the button {string} again', (a) => {
  // TODO: implement step
  cy.get('.modal-undo-btn').click()
  cy.wait(4000)
});

Then('the user should be able to see bokningshistory', () => {
  // TODO: implement step
  cy.get('h1.text-center').contains('Tack för din bokning!').should('be.visible')
});

Then('the user clicks the button {string} and returns to the home page', (a) => {
  // TODO: implement step
  cy.get('.startpage-btn').click()
});

Then('the user selects {string} and show time then clicks {string}', (a, b) => {
  // TODO: implement step
  cy.get(':nth-child(1) > .pMovieTitle').should('be.visible').click()
  cy.get(':nth-child(2) > .custom-radio-button').click()
  cy.get('.screening-list > .confirm-button').click()
});

Then('the user selects the {string} and clicks on the button {string} in the seat box', (a, b) => {
  // TODO: implement step
  cy.get(':nth-child(1) > .counter-container > :nth-child(3)').click()
  cy.get('.price-component > .confirm-button').click();
});

Then('the user clicks on the reserved seat', () => {
  // TODO: implement step
  cy.get('.default-seat.occupied-seat').should('be.visible')
  //cy.get('.default-seat.occupied-seat:first').should('be.disabled')
  cy.wait(2000)
  cy.get('.default-seat.occupied-seat:first').click({ force: true })
});

Then('the user clicks on the button', () => {
  // TODO: implement step
  cy.get('.flex-space-between > .confirm-button').click()
  cy.wait(4000)
});

Then('the user stays in the same tab' , () => {
  // TODO: implement step
   
  cy.get('body').screenshot()
});