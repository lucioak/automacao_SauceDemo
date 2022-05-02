import CarrinhoElements from '../elements/CarrinhoElements.js'
const carrinhoElements = new CarrinhoElements

class CarrinhoPage{

    checkout(){
        cy.get(carrinhoElements.botaoCheckout()).click();
    }

}
export default CarrinhoPage;