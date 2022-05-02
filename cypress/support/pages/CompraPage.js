import CompraElements from '../elements/CompraElements.js'
import LoginPage from '../pages/LoginPage'
const loginPage = new LoginPage
const compraElements = new CompraElements

class CompraPage {

    logadoNoSite(){
        loginPage.acessaSite();
        loginPage.digitaUser();
        loginPage.digitaSenha();
        loginPage.clicaBotaoLogin();
        
            }

    selecionaproduto(){
      cy.get(compraElements.botaoProduto1()).click();
      cy.get(compraElements.botaoProduto2()).click();
    }

    carrinho(){
        cy.get(compraElements.botaoCarrinho()).click();
        cy.url().should('eq', 'https://www.saucedemo.com/cart.html');
    }

}

export default CompraPage;