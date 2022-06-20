const Locators = require('../fixtures/Locators.json');

before('login with locators test', () => {
    cy.visit('/');
    cy.get(Locators.Navigation.actionButton).eq(1).click();

})
    it('login with locators', () => {

    cy.get(Locators.Login.emailInput).type('test1234@test.test');
    cy.get(Locators.Login.passwordInput).type('test1234');
    cy.get(Locators.Login.submitBtn).click();

    })