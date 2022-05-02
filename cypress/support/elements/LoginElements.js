class LoginElements {
    
    username = () =>{
        return'[data-test=username]'
    }
    password = () => {
        return'[data-test=password]'
    }

    botaoLogin = () => {
        return'#login-button'

    }

}

export default LoginElements;
