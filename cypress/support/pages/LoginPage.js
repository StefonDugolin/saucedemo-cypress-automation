import dados from '../../fixtures/login.json';
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

    loginComSucesso() {
        this.visitar();
        this.preencherUsuario(dados.cadastroValido.Usuario);
        this.preencherSenha(dados.cadastroValido.senha)
        this.clicarBotaoLogin();
        cy.url().should('include', '/inventory.html');
    }
}

export default new LoginPage()