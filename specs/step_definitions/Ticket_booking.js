import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";




Then('I choose sitting place and proceed', () => {
  cy.get(':nth-child(7) > :nth-child(5)')
    .click({ force: true })
  cy.get('.flex-space-between > .confirm-button').click({ force: true })
});

When('I click {string} button', (buttonName) => {
  //cy.get('.screening-list > .confirm-button').click()
  cy.contains('button', buttonName).click({ force: true })
  //cy.get('#root > div > div.col-lg-6.col-xl-5.col-xxl-4>div>div:nth-child(2)').should('be.visible')
});

When('I click the confirm button', () => {
  //cy.get('.screening-list > .confirm-button').click()
  cy.get('.price-component > .confirm-button').click({ force: true })  //cy.get('#root > div > div.col-lg-6.col-xl-5.col-xxl-4>div>div:nth-child(2)').should('be.visible')
});

Then('I select ticket type {string} quantity {string} and proceed', (ticketType, qty) => {
  cy.get('#root > div > main > div > div > div > div.col-lg-6.col-xl-5.col-xxl-4 > div > div:nth-child(2) > div > div > div > div:nth-child(1) > div > button:nth-child(3)')
    .click({ force: true })
  cy.get('.price-component > .confirm-button').click({ force: true })
});


Then('I enter my email at confirmation stage and proceed', () => {
  cy.get("[type='email']").type('[anam-rehman@live.com]', { force: true })
  cy.get('#booking-btn').click({ force: true })

});

/* No duplicate steps, this one already in Movie_trailers.js
When('I click on {string} button', (a) => {});*/

Then('I should see confirmation booking alert box', () => {
  //cy.get('.modal-undo-btn').trigger("click")
  //cy.get('.modal-undo-btn').first().focus().click()
  //cy.get('.modal-undo-btn').should('be.visible').click().debug()

  //cy.contains('Vill du boka 1 biljetter för filmen Gladiator?').click()
  //cy.focus('Boka').click({ force: true })
  //cy.focused('.modal-undo-btn').click({ force: true })


  cy.get('.modal-content')
    .should('be.visible')
    .contains('button', 'Boka')
    .click()



})
  ;

Then('I should see confirmation screen', () => {
  cy.url().should('include', '/bokningsbekraftelse');

});

When('I choose my desired show time and proceed', () => {
  cy.get(':nth-child(1) > .custom-radio-button').click({ force: true })
  cy.contains('button', 'Gå vidare').click({ force: true })
});

Then('I can see my booking details', () => {
  // TODO: implement step
});

When('I select {string} as the ticket type', (a) => {
  // TODO: implement step
});

When('I enter a quantity of 2', () => {
  // TODO: implement step
});

/* No duplicate steps, this one already above
When('I select {string} as the ticket type', (a) => {});*/

When('I enter a quantity of 1', () => {
  // TODO: implement step
});

When('I proceed with the booking process', () => {
  // TODO: implement step
});

Then('I should see the total cost of (2 * 140 SEK + 1 * 80 SEK)', () => {
  // TODO: implement step
});

Then('my booking should be confirmed', () => {
  // TODO: implement step
});