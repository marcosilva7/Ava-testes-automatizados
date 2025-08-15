Cypress.on("uncaught:exception", (err) => {
  if (err.message.includes("Request failed with status code 422"));
    return false;
});
