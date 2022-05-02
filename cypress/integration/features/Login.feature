Feature: Login site saucedemo

    Scenario: acesso o site saucedemo
        Given acesso o site saucedemo
        When digito login
        And digito senha
        And clico no botao Login
        Then devo acessar a pagina de produtos