/// <reference types="Cypress" />
describe('zavrsni test', () => {
    let validEmail = 'NikolaCvejic25@gmail.com'
    let validPassword = 'J8245jq4'
    it('login with valid credentials', () => {
        cy.visit('/login')
        cy.get('input[name = "email"]').type(validEmail)
        cy.get('input[name = "password"]').eq(0).type(validPassword)
        cy.get('button').eq(0).click()
        cy.wait(2000)
    })
    it('creating a new organisation', () => {
        cy.url().should('include', '/my-organizations')
        cy.get('.vs-c-my-organization__avatar').last().click()
        cy.get('input[name = "name"]').type('CvejinaOrganizacija3')
        cy.get('button').eq(-1).click()
        cy.get('button').eq(-1).click()
        cy.wait(6000)
        cy.get('.el-icon-close').eq(1).click()
    })

    it('create new board', () => {
        cy.get('.vs-c-organization-boards__item--add-new').click()
        cy.get('input[name = "name"]').type('Cvejas Board555')
        cy.get('button').last().click()
        cy.get('.vs-c-radio-check').eq(0).click()
        cy.get('button').last().click()
        cy.get('button').last().click()
        cy.get('button').last().click()
        cy.get('button').last().click()
    })

    it.skip('delete board', () => {
        cy.get('.vs-c-site-logo').last().click()
        cy.wait(5000)
        cy.go('back')
        cy.get('button').last().click()
    })

})