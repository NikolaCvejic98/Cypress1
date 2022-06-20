class LoginPageCypress {

    get emailInput(){
        return cy.get('input[name="email"]')
    }

    get passwordInput(){
        return cy.get('input[name="password"]')
    }
    get submitBtn(){
        return cy.get('button').eq(1)
    }
}

export const loginPageCypress = new LoginPageCypress()