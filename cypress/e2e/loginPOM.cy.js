/// <reference types="Cypress" />
import { loginPage } from "../page_objects/loginPage";

describe('login POM', () => {
    let validEmail = 'test1234@test.test'
    let validPassword = 'test1234'

    before('visit login page', () => {
        cy.loginViaBackend('test1234@test.test', 'test1234')
        cy.url().should('contains', '/');
    })

    it('loginViaBackend', () => {
        cy.loginViaBackend()
        cy.visit('/create')
    })

    it('login with intercept', () => {
        cy.intercept({
            method: 'POST',
            url: 'https://gallery-api.vivifyideas.com/api/auth/login'
        }).as('validLogin')
        cy.url().should('include', '/login');
        loginPage.login(validEmail, validPassword);
        cy.wait('@validLogin').then(interception => {
            expect(interception.response.statusCode).to.exist
            expect(interception.response.statusCode).eq(200)
        })

        cy.url().should('not.include', '/login');
        loginPage.logoutBtn.should('be.visible')
    })

    it.only('wait for the logout request', () => {
        cy.intercept({
            method: 'POST',
            url: 'https://gallery-api.vivifyideas.com/api/auth/logout'
        }).as('logout');

        loginPage.logoutBtn.click();
        cy.wait('@logout').then(interception => {
            expect(interception.response.statusCode).eq(200);
        })
    })


})