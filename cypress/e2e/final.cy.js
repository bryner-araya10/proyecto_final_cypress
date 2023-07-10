import finalPage from "../pages/finalPage";

describe('Proyecto final', () => {
  beforeEach (() => {
    cy.visit('https://www.saucedemo.com/')
    //cy.fixture('correo').as("data")
  })
  
  context("Sección de Login", () => {

    it('Login Invalido', () => {
    finalPage.elements.usuario().type('problem_user');
    finalPage.elements.password().type('secret_saucse');
    finalPage.elements.btnlogin().click();
    cy.getLogin('error').should('be.visible');
  

  });

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

  it('Login correcto y Validacion de Menu', () => {
    finalPage.elements.usuario().type('standard_user');
    finalPage.elements.password().type('secret_sauce');
    finalPage.elements.btnlogin().click();
    cy.get("span").eq(0).contains("Products")
    cy.get('.bm-burger-button').click();
    cy.get('.bm-cross-button').click();
    cy.get('.bm-burger-button').click();
    cy.get('#logout_sidebar_link').click();

});
});

context("Inventario", () => {
it('Funcionalidad del Filtro', () => {
finalPage.elements.usuario().type('standard_user');
finalPage.elements.password().type('secret_sauce');
finalPage.elements.btnlogin().click();
cy.get('.product_sort_container').select('Price (high to low)');

});
});
  
context("Vista detalle del producto", () => {
  it('Validacion de productos', () => {
    finalPage.elements.usuario().type('standard_user');
    finalPage.elements.password().type('secret_sauce');
    finalPage.elements.btnlogin().click();
    cy.contains('.inventory_item_name', 'Sauce Labs Bolt T-Shirt').click();
    cy.get('.inventory_details_name').should('have.text', 'Sauce Labs Bolt T-Shirt');
    cy.get('.inventory_details_img').should('be.visible');
    cy.get('.inventory_details_price').should('have.text', '$15.99');
    cy.get('.inventory_details_back_button').click();

  });
});
  
context("Bonus", () => {
  it('Carrito', () => {
    finalPage.elements.usuario().type('standard_user');
    finalPage.elements.password().type('secret_sauce');
    finalPage.elements.btnlogin().click();
    cy.get('.inventory_item').each(($product) => {
      $product.find('.btn_primary').click();
      });

  it.only('Remover objetos del carrito', () => {
    cy.get('.inventory_item').each(($product) => {
    $product.find('.btn_secondary').click();
      });

  });
    
  });
});





