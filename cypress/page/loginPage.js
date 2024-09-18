class LoginPage
{  

    standardLogin()
    {
        cy.visit(Cypress.env('url'))
        cy.get("#email").type("professor@techlife.com")
        cy.get("#password").type("12345678")
        cy.get('.btn').click()
    }
    
    // Métodos para pegar elementos da página
    getEmail() {
        return cy.get("#email");  // Retorna o campo de e-mail
    }

    getPassword() {
        return cy.get("#password");  // Retorna o campo de senha
    }

    getLoginButton() {
        return cy.get(".btn");  // Retorna o botão de login
    }

    getErrorMsg() {
        return cy.get('.error');  // Retorna a mensagem de erro
    }

}

export default LoginPage;