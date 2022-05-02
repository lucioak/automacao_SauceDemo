/* global Given, Then, When */

import CarrinhoPage from '../pages/CarrinhoPage'
import CompraPage from '../pages/CompraPage'
const compraPage = new CompraPage
const carrinhoPage = new CarrinhoPage

beforeEach(() => {
    compraPage.logadoNoSite();

})

Given ('esteja na tela do carrinho',()=>{
    compraPage.carrinho();
    
})

When ('clicar no botao checkout',()=>{
    carrinhoPage.checkout();

})

