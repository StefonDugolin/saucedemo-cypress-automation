class LoginPage {
    visitar() {
        cy.visit('/')
    }

    preencherUsuario(usuario) {
        cy.get('[data-test="username"]').type(usuario);
    }

    preencherSenha(senha) {
        cy.get('[data-test="password"]').type(senha);
    }

    clicarBotaoLogin() {
        cy.get('[data-test="login-button"]').click();
    }
}

export default new LoginPage()