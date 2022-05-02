/* global Given, Then, When */

import CheckoutPage from '../pages/CheckoutPage'
const checkoutPage = new CheckoutPage


And ('preencher nome completo', ()=>{
checkoutPage.nomeCompleto();
}) 
        
And ('preencher Cep', ()=>{
    checkoutPage.Cep();

})
        
And ('clicar no Botao continue', ()=>{
    checkoutPage.botaoContinue();

})
        
Then ('devo ver a tela final', ()=>{
    checkoutPage.telaFinal();
    checkoutPage.botaoFinish();

})