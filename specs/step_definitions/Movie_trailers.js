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
cy.wait(2000)
  //getIframeBody().find('.ytp-time-duration')

  getIframeBody().find('.ytp-large-play-button').click({ force: true });
  cy.wait(5000)
});

Then('I should watch the trailer', () => {
  // TODO: implement step

});

/* No duplicate steps, this one already in movie_detail.js
When('I click on the movie titled {string}', (a) => {});*/

/* No duplicate steps, this one already in movie_detail.js
Then('I should be directed to the movie details page', () => {});*/

When('I click on watch on youtube button', () => {
cy.wait(2000)
  // Currently I am working on this, its not verifying that our video is played or not on youtube
  getIframeBody().find('a.ytp-impression-link').click({ force: true });
  cy.wait(2000)

});

Then('It should redirected to youtube', () => {
  // TODO: implement step
});

Then('I could watch trailer on youtube', () => {
  // TODO: implement step
});