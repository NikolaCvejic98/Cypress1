/// <reference types="Cypress" />

import { loginPageCypress } from "../page_objects/loginPageCypress";

describe('Vivify Cypress testing', () => {
    let validEmail = 'AlcatelBlitz98@gmail.com'
    let validPassword = 'J8245jq4'

    before('visit login page', () => {
        cy.visit('https://cypress.vivifyscrum-stage.com/login')
        cy.get('input[name="email"]').type(validEmail),
        cy.get('input[name="password"]').eq(0).type(validPassword)
        cy.get('button').eq(0).click(0)
        cy.wait(2000)

    })
    
    it('create a new organisation', () => {
        cy.get('.vs-c-my-organization').eq(-2).click()
    
    })

    
})