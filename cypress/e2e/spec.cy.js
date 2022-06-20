describe('login test', () => {
  it('should visit', () => {
    cy.visit('https://gallery-app.vivifyideas.com/');
    cy.url().should('contains', '/gallery-app')
    cy.get('a[href="/login"]').click();
    cy.url().should('contains', '/login');
  })

  it('login with valid credentials', () => {
   
    cy.get('input[id="email"]').type('test1234@test.test');
    cy.get('input[id="password"]').type('test1234');
    cy.get('button').click();

  })

  it('click on the logout button', () => {

    cy.get('.nav-link').should('have.length', 4);
    cy.get('.nav-link').eq(3).click();

  })

})
