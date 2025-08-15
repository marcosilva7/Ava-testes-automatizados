import { loginElements } from '../elementos-login';

// Comando customizado para login
Cypress.Commands.add('insereUsername', (username) => {
  cy.get(loginElements.user).clear().type(username);
});

Cypress.Commands.add('inserePassword', (password) => {
  cy.get(loginElements.password).clear().type(password);
});