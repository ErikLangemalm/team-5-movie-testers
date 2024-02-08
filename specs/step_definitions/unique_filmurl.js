import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

/* No duplicate steps, this one already in prototype.js
Given('that im scrolling for movies available', () => {});*/

Given('That I am scrolling for movies', () => {
  // TODO: implement step
});

When('I Click on a movie', () => {
  // TODO: implement step
  cy.get('<div class="movieCard card col-lg-3 col-md-4 col-sm-6 col-6"><img class="movieImages"').first().click({ force: true });
});

Then('I should be directed from the movie selection to the more detailed movie view', () => {
  // TODO: implement step
});

/* No duplicate steps, this one already in prototype.js
Then('I should then be able to see following information:', () => {});*/

Given('That I am in the detailed movie view', () => {
  // TODO: implement step
});

When('I Check the URL it should contain the movie title in the URL', () => {
  // TODO: implement step
});

When('I should then be able to see following information:', () => {
  // TODO: implement step
});