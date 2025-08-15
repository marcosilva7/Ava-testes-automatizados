import { loginRequest } from "../../../support/intercepts/login/login-intercepts";

const username = "usuarioInvalido";
const password = "senhaInvalida";

describe("Realiza testes de login", () => {
  beforeEach(() => {
      cy.fixture('acessoAmbiente').then((data) => {
        cy.visit(data.sprint.url, { timeout: 30000 });
      });
  });

  it("Insere apenas username e realiza tentativa de login", () => {
    cy.insereUsername(username);
    // Verifica se o botão ENVIAR está desabilitado
    cy.get('[data-cy="buttonSubmit"]').should("be.disabled");
  });

  it("Insere apenas password e realiza tentativa de login", () => {
    cy.inserePassword(password);
    // Verifica se o botão ENVIAR está desabilitado
    cy.get('[data-cy="buttonSubmit"]').should("be.disabled");
  });

  it("Insere dados de login incorretos e realiza tentativa de login", () => {

    // Intercepta a requisição de login com erro 422
    loginRequest();
    cy.login(username, password);
    cy.wait("@interceptLoginRequest");

    cy.get(".Toastify__toast--error") // Aumenta o timeout para 10 segundos
      .should("be.visible")
      .and("contain", "Usuário ou senha incorretos."); // Verifica o texto exato de erro
  });

  it("Insere dados de login corretos e realiza tentativa de login", () => {
    // Acessa fixture com dados de login
    cy.fixture("acessoAmbiente").then((admin) => {
      cy.login(admin.sprint.username, admin.sprint.password);
    });

    cy.url().should("include", "/admin");
  });
});
