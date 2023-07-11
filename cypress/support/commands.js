Cypress.Commands.add("getLogin", (selector) => {
    return cy.get(`[data-test=${selector}]`)
  })

