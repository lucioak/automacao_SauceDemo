/* global Given, Then, When */

import CompraPage from '../pages/CompraPage'
const compraPage = new CompraPage


Given('esteja logado no site saucedemo',()=>{
    compraPage.logadoNoSite();


})

When ('selecionar produtos', ()=>{
    compraPage.selecionaproduto();

})

Then ('produtos sao exibidos no carrinho',()=>{
    compraPage.carrinho();

})

