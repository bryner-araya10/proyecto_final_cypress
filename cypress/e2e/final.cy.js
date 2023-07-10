import finalPage from "../pages/finalPage";

describe('Proyecto final', () => {
  beforeEach (() => {
    cy.visit('https://www.saucedemo.com/')
  })
  
  context("Sección de Login", () => {

    it('Login Invalido', () => {
    finalPage.elements.usuario().type('problem_user');
    finalPage.elements.password().type('secret_saucse');
    finalPage.elements.btnlogin().click();
    cy.getLogin('error').should('be.visible');
  

  })

    it('Login con contraseña en blanco', () => {
    finalPage.elements.usuario().type('problem_user');
    finalPage.elements.password().type(' ');
    finalPage.elements.btnlogin().click();
    cy.getLogin('error').should('be.visible');
  });

    it('Login con usuario en blanco', () => {
    finalPage.elements.usuario().type(' ');
    finalPage.elements.password().type('secret_sauce');
    finalPage.elements.btnlogin().click();
    cy.getLogin('error').should('be.visible');
  });

    it('Login con credenciales en blanco', () => {
    finalPage.elements.usuario().type(' ');
    finalPage.elements.password().type(' ');
    finalPage.elements.btnlogin().click();
    cy.getLogin('error').should('be.visible');
  });

    it('Login correcto', () => {
    finalPage.elements.usuario().type('standard_user');
    finalPage.elements.password().type('secret_sauce');
    finalPage.elements.btnlogin().click();
    cy.get("span").eq(0).contains("Products")
  });

});

context("Menu", () => {

 
  });

context("Inventario", () => {

 
  });


context("Detalle del producto", () => {

 
  });

context("Bonus", () => {

 
  });

});



