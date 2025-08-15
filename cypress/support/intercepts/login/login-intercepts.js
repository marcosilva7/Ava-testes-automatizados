export const loginRequest = () => {
  // Intercepta requisição de login com erro 422
  cy.intercept('POST', '/api/v1/auth/login', (req) => {
    req.continue((res) => {
      if (res.statusCode === 422) {
        expect(res.statusCode).to.eq(422);
        cy.log
        expect(res.body).to.have.property('message').that.includes('Essas credenciais não foram encontradas em nossos registros.');
      }
    });
  }).as('interceptLoginRequest');
};