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
  //getIframeBody().find('.ytp-time-duration')

  getIframeBody().find('.ytp-large-play-button').click({ force: true });
});

Then('I should watch the trailer', () => {
  // TODO: implement step
  
});

/* No duplicate steps, this one already in movie_detail.js
When('I click on the movie titled {string}', (a) => {});*/

/* No duplicate steps, this one already in movie_detail.js
Then('I should be directed to the movie details page', () => {});*/

When('I click on watch on youtube button', () => {

  // Currently I am working on this, youtube link inside ifram is not found
  //getIframeBody().find('a.ytp-impression-link').click({ force: true });

});

Then('It should redirected to youtube', () => {
  // TODO: implement step
});

Then('I could watch trailer on youtube', () => {
  // TODO: implement step
});