import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const getIframeDocument = () => {
  return cy
    .get('iframe')

    .its('0.contentDocument').should('exist')
}

const getIframeBody = () => {
  // get the document
  return getIframeDocument()
    .its('body').should('not.be.undefined')
    .then(cy.wrap)
}

When('I click the play trailer button', () => {

  cy.wait(1000);
  getIframeBody().find('.ytp-time-duration')

  //getIframeBody().find('.ytp-large-play-button').click({ force: true });
});

Then('I should watch the trailer', () => {
  // TODO: implement step

  getIframeBody().get('.ytp-time-duration').should('have.value', 1)

});

/* No duplicate steps, this one already in movie_detail.js
When('I click on the movie titled {string}', (a) => {});*/

/* No duplicate steps, this one already in movie_detail.js
Then('I should be directed to the movie details page', () => {});*/

When('I click on {string} button', (a) => {
  // TODO: implement step
});

Then('It should redirected to youtube', () => {
  // TODO: implement step
});

Then('I could watch trailer on youtube', () => {
  // TODO: implement step
});