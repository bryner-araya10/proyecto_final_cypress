describe('Proyecto final', () => {
  beforeEach (() => {
    cy.visit('https://www.saucedemo.com/')
  })
  
  // USUARIO INVALIDO
    it('Login', () => {
    cy.get('#user-name').type('problem_user');
    cy.get('#password').type('secret_saucse');
    cy.get('#login-button').click();
    cy.get('.error-message-container').should('be.visible');
  });

    // USUARIO EN BLANCO
    it('Login2', () => {
    cy.get('#user-name').type('problem_user');
    cy.get('#password').type(' ');
    cy.get('#login-button').click();
    cy.get('.error-message-container').should('be.visible');
  });


    // USUARIO CORRECTO
    it('Login3', () => {
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get("span").eq(0).contains("Products")
  });

});

