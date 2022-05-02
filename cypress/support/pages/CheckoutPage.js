import CheckoutElements from '../elements/CheckoutElements.js'
const checkoutElements = new CheckoutElements

class CheckoutPage{

    nomeCompleto(){
        cy.get(checkoutElements.campoNome()).type('Luciana');
        cy.get(checkoutElements.campoSobrenome()).type('Carvalho');
    }

    Cep(){
        cy.get(checkoutElements.campoCep()).type('08310510');
    }

    botaoContinue(){
        cy.get(checkoutElements.continue()).click();
    }

    telaFinal(){
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-two.html');
    }

    botaoFinish(){
        cy.get(checkoutElements.finish()).click();
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-complete.html');
    }

}
export default CheckoutPage;