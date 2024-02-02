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
  cy.get('.theater-container').each(($section, sectionIndex) => {
    // Within each theater container, iterate over theater rows
    cy.wrap($section).find('.theatre-row').then(($seats, seatsIndex) => {
      let row = sectionIndex + 1;
      let seat = seatsIndex + 1;
      cy.log(`Clicking on seat: Row ${row}, Seat ${seat}`);
      // Click on the first available seat within the first theater row only
      cy.wrap($seats.eq(0)).find('.default-seat.available-seat').first().click({ force: true });
    });
  });
  cy.get('.flex-space-between > .confirm-button').first().click({ force: true });
});

When('I put in my email', () => {
  // TODO: implement step
});

Then('That seat should be reserved for me under the bookings tab.', () => {
  // TODO: implement step
});