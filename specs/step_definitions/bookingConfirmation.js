import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I successfully buy my tickets', () => {
  cy.visit('https://filmvisarna-team5.nodehill.se/');
  cy.wait(3000)
  cy.contains('.pMovieTitle', 'The Usual Suspects').click();
  cy.wait(1000)
  cy.contains('.custom-radio-button', 'Söndag, 2024-01-28, 21:00, Eng tal, Sve text').click({ force: true });
  cy.contains('button', 'Gå vidare').click({ force: true })
  cy.wait(2000)
  cy.get('div.counter-container > button').eq(1).click({ force: true });
  cy.wait(1000)
  cy.get('.price-component > .confirm-button').click({ force: true })
  cy.get('theatre-container')
    .find('default-seat available-seat')
    .should('be.visible') // Wait until the seat elements are visible
    .eq(4)
    .click();



});

Then('I should be directed from the payment screen to the booking confirmation screen', () => {
  // This step would involve asserting that the URL changes after successful payment
  cy.url().should('include', '/booking-confirmation'); // Replace '/booking-confirmation' with the actual confirmation URL
});

Then('I should then be able to see the following information:', (dataTable) => {
  // This step would involve verifying the information displayed on the booking confirmation screen
  dataTable.rawTable.forEach(row => {
    const [infoLabel, expectedValue] = row;
    cy.contains(infoLabel).should('contain', expectedValue);
  });
});

Given('I am logged in on the page', () => {
  // This step could involve logging in to the website if it requires authentication
  // If the website requires authentication, you would need to implement login steps here
  // For example, entering credentials and clicking on the login button
});

When('I check mina bokningar', () => {
  // This step could involve navigating to the 'Mina bokningar' section of the website
  // Implement steps to navigate to 'Mina bokningar'
  cy.contains('Mina bokningar').click(); // Click on 'Mina bokningar' link
});

When('I should see all my bookings with the following information', (dataTable) => {
  // This step would involve verifying the information of bookings displayed in 'Mina bokningar'
  dataTable.rawTable.forEach(row => {
    const [bookingInfo] = row;
    cy.contains('.booking-item', bookingInfo).should('exist');
    // Add assertions to check other information about bookings
  });
});
