import finalPage from "../pages/finalPage";

describe('Proyecto final', () => {
  beforeEach (() => {
    cy.visit('https://www.saucedemo.com/')
    cy.fixture('login').as("data")
  })
  
  context("Login", () => {

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
    cy.xpath('//div').contains("Swag Labs");
    cy.get('.bm-item-list');
    cy.get('.bm-burger-button').click();
    cy.get('.bm-cross-button').click();


});
});

context("Inventario", () => {
it('Funcionalidad del Filtro', () => {
finalPage.elements.usuario().type('standard_user');
finalPage.elements.password().type('secret_sauce');
finalPage.elements.btnlogin().click();
cy.xpath('//div').contains("Products")
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
  it('Agregar productos al Carrito', () => {
    finalPage.elements.usuario().type('standard_user');
    finalPage.elements.password().type('secret_sauce');
    finalPage.elements.btnlogin().click();
    cy.get('.inventory_item').each(($product) => {
    $product.find('.btn_primary').click();
    cy.get('.shopping_cart_link').click();
    cy.get('.shopping_cart_badge').should('have.text', '6');
    cy.url().should('include', '/cart.html');
    finalPage.elements.btnlogout().click()

    });
  });
});
})