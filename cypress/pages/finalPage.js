
class login{


    elements ={
        usuario : () => cy.getLogin('username'),
        password : () => cy.getLogin('password'),
        btnlogin : () => cy.getLogin('login-button'),
        btnlogout : () => cy.getLogin('continue-shopping'),
       
    }

    clickOnSubmitBtn(){
    this.elements.submitBtn().click()
    }
}


module.exports = new login();
