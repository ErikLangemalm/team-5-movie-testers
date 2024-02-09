import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('That I am on the first page.', () => {
  // TODO: implement step
  cy.visit('/');
  cy.viewport(1000, 1200);
});

When('I press the logo in the top right.', () => {
  // TODO: implement step

  cy.get('#basic-nav-dropdown').click({ force: true });
  //cy.get('.d-flex.justify-content-center.mt-5 .startpage-btn.btn.btn-outline-secondary.py-2.mb-4').click({ force: true });
});

When('I select bli medlem.', () => {
  // TODO: implement step
  cy.get('a[href="/registrera"]').click({ force: true });
});

When('I input my email and password.', () => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  let email = result + "@evvgo.com";
  let password = "Password123";
  cy.get('.form-control.with-icon').eq(0).click({ force: true });
  cy.get('.form-control.with-icon').eq(0).type(email);
  cy.get('.form-control.with-icon').eq(1).click({ force: true });
  cy.get('.form-control.with-icon').eq(1).type(password);
  cy.get('#login-btn').click({ force: true });
});

Then('I should get confirmation that a new account has been created.', () => {
  // TODO: implement step
  cy.on('window:alert', alertBoxContent => {
    expect(alertBoxContent).to.equal(`Välkommen, du är nu medlem!`);
  });
});

/* No duplicate steps, this one already above
Given('That I am on the first page.', () => {});*/

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
  let email = "cifap38802@evvgo.com";
  let password = "Password123";
  cy.get('.form-control.with-icon').eq(0).click({ force: true });
  cy.get('.form-control.with-icon').eq(0).type(email);
  cy.get('.form-control.with-icon').eq(1).click({ force: true });
  cy.get('.form-control.with-icon').eq(1).type(password);
  cy.get('#login-btn').click({ force: true });
  cy.url().should('include', '/logga-in');
});

/* No duplicate steps, this one already above
Given('That I am on the first page.', () => {});*/

/* No duplicate steps, this one already above
When('I press the logo in the top right.', () => {});*/

/* No duplicate steps, this one already above
When('I select bli medlem.', () => {});*/

When('I input a random string as an email and password.', () => {
  // TODO: implement step
  let placeholder = "placeholder";
  let email = 'aoplishgjlksahgjowahngiowajgash';
  let password = "Password123";
  cy.get('.form-control.with-icon').eq(0).click({ force: true });
  cy.get('.form-control.with-icon').eq(0).type(placeholder);
  cy.get('.form-control.with-icon').eq(0).click({ force: true });
  cy.get('.form-control.with-icon').eq(0).type(email);
  cy.get('.form-control.with-icon').eq(1).click({ force: true });
  cy.get('.form-control.with-icon').eq(1).type(password);
  cy.get('#login-btn').click({ force: true });
});

/* No duplicate steps, this one already above
Then('I shouldnt be able to create a new account.', () => {});*/