/* global Given, Then, When */

import LoginPage from '../pages/LoginPage'
const loginPage = new LoginPage

Given ('acesso o site saucedemo',()=>{
    loginPage.acessaSite();

})

When ('digito login', () =>{
    loginPage.digitaUser();

})

And ('digito senha', () =>{
    loginPage.digitaSenha();

})

And ('clico no botao Login', ()=>{
    loginPage.clicaBotaoLogin();

})

Then ('devo acessar a pagina de produtos', ()=>{
    loginPage.acessaVitrine();

})