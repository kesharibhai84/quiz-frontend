// https://docs.cypress.io/api/introduction/api.html

describe("Player", () => {
  it("shows splash screen", () => {
    cy.visit("/");
    cy.get('[data-test="splash"]').should("exist");
    cy.get('[data-test="header"]').should("not.exist");
  });

  it("shows start button on splash screen", () => {
    cy.visit("/");
    cy.get('[data-test="startQuiz"]').should("exist");
  });
});
