/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements.js'
const loginElements = new LoginElements
const url = Cypress.config("baseUrl")

class LoginPage {

    acessaSite(){
        cy.visit(url);
    }

    digitaUser(){
        cy.get(loginElements.username())
          .type('standard_user');
          
    }

    digitaSenha(){
        cy.get(loginElements.password())
            .type('secret_sauce');
            
    }

    clicaBotaoLogin(){
        cy.get(loginElements.botaoLogin()).click();
    }

    acessaVitrine(){
        cy.url().should('eq','https://www.saucedemo.com/inventory.html');
    }
          
}

export default LoginPage;