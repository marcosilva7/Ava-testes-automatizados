import { loginElements } from '../elementos-login';

// Comando customizado para login
Cypress.Commands.add('login', (username, password) => {
  cy.get(loginElements.user).clear().type(username);
  cy.get(loginElements.password).clear().type(password);
  cy.get(loginElements.submit).click();
});