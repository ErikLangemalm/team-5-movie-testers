import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that I am on the first page', () => {
  // TODO: implement step
  cy.visit('/');
  cy.viewport(1000, 1200);
});

When('I click on a timeslot', () => {
  // TODO: implement step
  cy.get('div.screeningContainer button').first().click({ force: true });
});

When('I click on a specifik timeslot', () => {
  // TODO: implement step
  cy.get('div.custom-radio-button').first().click({ force: true });
  cy.get('input.screening-input').invoke('css', 'display', 'block').should('be.visible');
  cy.get('.confirm-button').first().click()
});

When('I select vuxen', () => {
  // TODO: implement step
  cy.get('div.counter-container > button').eq(1).click();
  cy.get('div > .confirm-button').first().click({ force: true });
});

When('I reserve a seat', () => {
  // TODO: implement step
  let row = 0;
  let seat = 0;
  cy.get('.theater-container').each(($row, rowIndex) => {

    row += 1;
    cy.wrap($row).each(($seat, seatIndex) => {
      seat += 1;
      cy.log(`Processing row ${rowIndex}`);
      cy.log(`Processing seat ${seatIndex}`);
      cy.wrap($seat).find('.default-seat.available-seat').first().click({ force: true });
    });
  });

  //cy.get('.default-seat.available-seat').first().click({ force: true });
  cy.get('.accordion-body .confirm-button').eq(2).click({ force: true });
});

When('I put in my email', () => {
  // TODO: implement step
  let email = "cifap38802@evvgo.com";
  cy.get('.form-control').click({ force: true });
  cy.get('.form-control').type(email);
  cy.get('#booking-btn').click({ force: true });
  cy.get('.modal-undo-btn.btn.cancel-btn.btn.btn-primary').click({ force: true });
});

Then('That seat should be reserved for me under the bookings tab.', () => {
  // TODO: implement step

});