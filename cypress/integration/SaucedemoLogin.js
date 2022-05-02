

it('visitar o site saucedemo', ()=>{
cy.visit('https://www.saucedemo.com/');
})

it('login na pagina principal',()=>{
cy.get('[data-test=username]').type('standard_user');
cy.get('[data-test=password]').type('secret_sauce');
cy.get('[data-test="login-button"]').click();
})

it('verificar se está na pagina de produtos', ()=>{
cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')

})

it('comprando produtos', ()=>{
    cy.get('#add-to-cart-sauce-labs-backpack').click();
    cy.get('#add-to-cart-sauce-labs-bike-light').click();
})

it('verifica carrinho', ()=>{
    cy.get('#shopping_cart_container > a').click()
    cy.url().should('eq', 'https://www.saucedemo.com/cart.html');
})
