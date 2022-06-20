/// <reference types="Cypress" />

const { registrationPage } = require("../page_objects/registrationPage")
const faker = require('@faker-js/faker');

describe('register POM', () => {
   
    const userData = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        shortPassword: faker.internet.password(4),
        passwordWithoutNummber: faker.internet.password(20, true, /(A-Z)/),
        emailWihoutCom: faker.internet.email('Nikola', 'Cvejic', 'cveja.cve'),
        veryLongFirstName: faker.random.alpha(256)
    }

    before('visit register page', () => {
        cy.visit('/')
        registrationPage.registerBtn.click();
        cy.url().should('include', '/register');    
    })

    it.skip('valid registration using POM', () => {
        registrationPage.register(
            userData.firstName,
            userData.lastName,
            userData.email,
            userData.password,
            userData.confirmPassword
        );
        cy.url().should('not.include', '/register');
    })

    it.skip('invalid registration with password less than 8 characters', () => {

        registrationPage.register(
            userData.firstName,
            userData.lastName,
            userData.email,
            userData.shortPassword
        )

    })

    it.skip('invalid registration with password not containing numbers', () => {

        registrationPage.register(
            userData.firstName,
            userData.lastName,
            userData.email,
            userData.passwordWithoutNummber
        )

    })

    it.skip('invalid register with email not containing .com', () => {

        registrationPage.register(
            userData.firstName,
            userData.lastName,
            userData.emailWihoutCom,
            userData.password
        )

    })

    it('invalid login with fist name longer than 255 chracters', () => {

        registrationPage.register(
            userData.veryLongFirstName,
            userData.lastName,
            userData.email,
            userData.password
        )

    })

})