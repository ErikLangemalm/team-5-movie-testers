import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

When('I click {string} button', (buttonName) => {
  cy.contains('button', buttonName).click({ force: true })
});

And('I click the confirm button', () => {
  cy.get('.price-component > .confirm-button').click({ force: true })
});

Then('I enter my email at confirmation stage and proceed', () => {
  cy.get("[type='email']").type('anam-rehman@live.com', { force: true })
  cy.get('#booking-btn').click({ force: true })

});

Then('I should see confirmation booking alert box', () => {
  cy.get('.modal-content')
    .should('be.visible')
    .contains('button', 'Boka')
    .click()
});

Then('I should see confirmation screen', () => {
  cy.url().should('include', '/bokningsbekraftelse');

});

When('I choose my desired show time and proceed', () => {
  cy.get(':nth-child(3) > .custom-radio-button').click({ force: true })
  cy.contains('button', 'Gå vidare').click({ force: true })
});

Then('I can see my booking details', () => {
  // TODO: implement step
});

Then('I can see total price {string}', (totalPrice) => {
  cy.get('.total-price').eq(0).should('contain.text', 'Total: ' + totalPrice)
  // TODO: implement step
});

When('I select {string} as the ticket type with quantity of {string}', (ticketType, qty) => {
  let categorySelector;

  if (ticketType === "Adult") {
    categorySelector = 'div.ticket-category:nth-of-type(1)';
  } else if (ticketType === "Child") {
    categorySelector = 'div.ticket-category:nth-of-type(3)';
  } else {
    categorySelector = 'div.ticket-category:nth-of-type(2)';
  }

  for (let i = 1; i <= parseInt(qty); i++) {
    cy.get(`${categorySelector} button:nth-of-type(2)`).click({ force: true });
  }
});