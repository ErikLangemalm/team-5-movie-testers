import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given('user is on the person is on the first page', () => {
  cy.visit('/');
  cy.viewport(1000, 1200);

  const randomDays = Math.floor(Math.random() * 30) + 1;
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + randomDays);
  const dateString = currentDate.toISOString().split('T')[0];
  cy.get('input.filterScreenings').type(dateString);
});

Then('there is an available movie on the selected date', () => {
  cy.get('input.filterScreenings')
  cy.get('button.screeningsBtn').click();
  });


Then('i select a date i should be given the available movies <availablemovies>', () => {
});