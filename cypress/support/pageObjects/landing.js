export class LandingPage {
  visit() {
    cy.visit("/dashboard");
  }

  assertOnLandingPage() {
    cy.url().should("include", "/dashboard");
    cy.get('[data-testid="dashboard-welcome-message"]')
      .should("be.visible")
      .and("contain", "Welcome back,");
  }

  assertUserLoggedIn(username) {
    cy.get('[data-testid="sidebar-user-info"]').should("contain", username);
  }

  clickLogOutButton() {
    cy.get('[data-testid="topbar-logout-btn"]').click();
  }
}

export const onLandingPage = new LandingPage();
