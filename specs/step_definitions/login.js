import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that I am on the first page', () => {
  // TODO: implement step
  cy.visit('/');
  cy.viewport(1000, 1200);


  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 10);
  const dateString = currentDate.toISOString().split('T')[0];
  cy.get('input.filterScreenings').invoke('val', dateString);

});

When('I click on a timeslot', () => {
  // TODO: implement step
  cy.get('div.screeningContainer button').eq(1).click({ force: true });
});

When('I click on a specifik timeslot', () => {
  // TODO: implement step
  cy.get('div.custom-radio-button').first().click({ force: true });
  cy.get('input.screening-input').invoke('css', 'display', 'block').should('be.visible');
  cy.get('.confirm-button').first().click({ force: true });
});

When('I select vuxen', () => {
  // TODO: implement step
  cy.get('div.counter-container > button').eq(1).click({ force: true });
  cy.get('div > .confirm-button').first().click({ force: true });
});

When('I reserve a seat', () => {
  // TODO: implement step
  cy.get('.theater-container').each(($row, rowIndex) => {

    cy.wrap($row).each(($seat, seatIndex) => {
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

Then('A seat should be reserved for me in the booking confirmation.', () => {
  // TODO: implement step

});

/* No duplicate steps, this one already above
Given('that I am on the first page', () => {});*/

/* No duplicate steps, this one already above
When('I click on a timeslot', () => {});*/

/* No duplicate steps, this one already above
When('I click on a specifik timeslot', () => {});*/

When('I select vuxen 100 times.', () => {
  // TODO: implement step
  for (let i = 0; i <= 100; i++) {
    cy.get('div.counter-container > button').eq(1).click({ force: true });
  }
  cy.get('div > .confirm-button').first().click({ force: true });
});

When('I reserve a seat.', () => {
  // TODO: implement step
  for (let i = 0; i <= 100; i++) {
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
  }
});

Then('I shouldnt be able to continue with my booking.', () => {
  // TODO: implement step
  cy.get('.accordion-body .confirm-button').eq(2).click({ force: true });
  cy.on('window:alert', alertBoxContent => {
    expect(alertBoxContent).to.equal(`Välj säten innan du fortsätter`);
  });

});