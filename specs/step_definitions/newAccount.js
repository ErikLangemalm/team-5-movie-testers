import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('That I am on the first page.', () => {
  // TODO: implement step
  cy.visit('/');
  cy.viewport(1000, 1200);
});

When('I press the logo in the top right.', () => {
  // TODO: implement step
});

When('I select bli medlem.', () => {
  // TODO: implement step
});

When('I input my email and password.', () => {
  // TODO: implement step
});

Then('I should get confirmation that a new account has been created.', () => {
  // TODO: implement step
});

Given('That I am om the first page.', () => {
  // TODO: implement step
});

Given('I have already created an account.', () => {
  // TODO: implement step
});

/* No duplicate steps, this one already above
When('I press the logo in the top right.', () => {});*/

/* No duplicate steps, this one already above
When('I select bli medlem.', () => {});*/

/* No duplicate steps, this one already above
When('I input my email and password.', () => {});*/

Then('I shouldnt be able to create a new account.', () => {
  // TODO: implement step
});

/* No duplicate steps, this one already above
Given('That I am on the first page.', () => {});*/

/* No duplicate steps, this one already above
When('I press the logo in the top right.', () => {});*/

/* No duplicate steps, this one already above
When('I select bli medlem.', () => {});*/

When('I input a random string as an email and password.', () => {
  // TODO: implement step
});

/* No duplicate steps, this one already above
Then('I shouldnt be able to create a new account.', () => {});*/