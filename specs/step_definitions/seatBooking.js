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
  cy.get('.theater-container > .theatre-row').each(($el, index, $list) => {
    // $el is a wrapped jQuery element
    if ($el.should('have.class', 'default-seat.available-seat')) {
      // wrap this element so we can
      // use cypress commands on it
      let seat = index;
      cy.log(seat);
      cy.wrap($el).click()
    } else {
      // do something else
    }
  })
});

When('I put in my email', () => {
  // TODO: implement step
  let email = "cifap38802@evvgo.com";
  cy.get('.form-control').click();
  cy.get('.form-control').type(email);
  cy.get('#booking-btn').click();
  cy.get('.modal-undo-btn.btn.cancel-btn.btn.btn-primary').click({ force: true });
});

Then('That seat should be reserved for me under the bookings tab.', () => {
  // TODO: implement step
});