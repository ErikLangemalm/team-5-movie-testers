import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

Given('the user is logged in', () => {
  cy.visit('/');
  cy.get('#basic-nav-dropdown').click({ force: true })
  cy.get('a[href="/logga-in"]').click({ force: true })
  cy.get("[type='email']").type('anam-rehman@live.com', { force: true })
  cy.get("[type='password']").type('Anam1234', { force: true })
  cy.get('#login-btn').click({ force: true })
  cy.wait(1000)
});

And('the user is at my booking page', () => {
  cy.url().should('include', '/bokningar')
});

Then('the user should see movie detail with {string} {string} {string} {string}', (bookingNummber, movieTitle, date, Status) => {
  // TODO: implement step
});

And('the user has movie {string} in the history', (movieName) => {
  cy.get('.booking-info').should('contain.text', movieName)

});

Then('the user should see the movie detail with date {string} and place {string}', (date, place) => {
  cy.get('.booking-info').should('contain.text', date, place)
});