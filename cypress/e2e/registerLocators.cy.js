/// <reference types="Cypress" />
import { registerPage } from "../page_objects/registerPage";

describe('register with registerPage', () => {
    let firstName = 'Nikola'
    let lastName = 'Cvejic'
    let regEmail = 'test555@test.test'
    let password = 'test1234'

    before('visit register page', () => {
        cy.visit('/')
        registerPage.registerBtn.click();
    })

    it('valid register using registerPage', () => {

        cy.url().should('include', '/register');
        cy.get(registerPage.firstnameInput).type(firstName)
        cy.get(registerPage.lastnameInput).type(lastName)
        cy.get(registerPage.emailInput).type(regEmail)
        cy.get(registerPage.passwordInput).type(password)
        cy.get(registerPage.passwordconfInput).type(password)
        cy.get(registerPage.termsBtn).click()
        cy.get(registerPage.submitBtn).click()
        cy.url().should('not.include', '/register')

    })
})