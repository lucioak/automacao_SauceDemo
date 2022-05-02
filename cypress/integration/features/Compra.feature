Feature: Compra de produtos no Site saucedemo

    Scenario: compra de produtos saucedemo
        Given esteja logado no site saucedemo
        When selecionar produtos
        Then produtos sao exibidos no carrinho


        Scenario: finalizacao da compra
        Given esteja na tela do carrinho
        When clicar no botao checkout
        And preencher nome completo
        And preencher Cep
        And clicar no Botao continue
        Then devo ver a tela final





        
    


