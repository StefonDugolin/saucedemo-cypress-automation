import LoginPage from '../support/pages/LoginPage'
import dados from '../fixtures/login.json'

describe('Login', () => {

  beforeEach(() => {
    LoginPage.visitar();
  });

  it('Login com sucesso', () => {
    LoginPage.preencherUsuario(dados.cadastroValido.usuario);
    LoginPage.preencherSenha(dados.cadastroValido.senha);
    LoginPage.clicarBotaoLogin();

    cy.url().should('include', '/inventory.html')
  });

  it('Usuário inválido', () => {
    LoginPage.preencherUsuario(dados.cadastroInvalido.usuario);
    LoginPage.preencherSenha(dados.cadastroInvalido.senha);
    LoginPage.clicarBotaoLogin();

    cy.contains(
      'Epic sadface: Username and password do not match any user in this service'
    ).should('be.visible');
  });

  it('Tentar logar digitando somente a senha, sem digitar o usuario', () => {
    LoginPage.preencherSenha(dados.cadastroValido.senha);
    LoginPage.clicarBotaoLogin();

    cy.contains(
      'Epic sadface: Username is required'
    ).should('be.visible');
  });

  it('Tentar logar digitando somente o usuário, sem digitar a senha', () => {
    LoginPage.preencherUsuario(dados.cadastroValido.usuario);
    LoginPage.clicarBotaoLogin();

    cy.contains(
      'Epic sadface: Password is required'
    ).should('be.visible');
  });
});