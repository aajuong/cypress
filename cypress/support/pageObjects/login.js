export class LoginPage {
  visit() {
    cy.visit("/login");
  }

  assertUserNameFieldVisible() {
    cy.get("#login-username").should("be.visible");
  }

  assertPasswordFieldVisible() {
    cy.get("#login-password").should("be.visible");
  }

  assertOnLoginPage() {
    cy.url().should("include", "/login");
    this.assertUserNameFieldVisible();
    this.assertPasswordFieldVisible();
    this.assertSubmitButtonVisible();
    this.assertForgotPasswordLinkVisible();
  }

  enterUsername(username) {
    cy.get("#login-username").clear().type(username);
  }

  enterPassword(password) {
    cy.get("#login-password").clear().type(password);
  }

  submit() {
    cy.get('[data-testid="login-submit-btn"]').click();
  }

  assertInvalidCredentialsMessage() {
    cy.get('[data-testid="login-error-message"]')
      .should("be.visible")
      .and("contain", "The username or password you entered is incorrect.");
  }

  assertLockedUserMessage() {
    cy.get('[data-testid="login-error-message"]')
      .should("be.visible")
      .and(
        "contain",
        "Your account has been suspended. Please contact support.",
      );
  }

  assertSubmitButtonVisible() {
    cy.get('[data-testid="login-submit-btn"]').should("be.visible");
  }

  assertForgotPasswordLinkVisible() {
    cy.get('[data-testid="forgot-password-link"]').should("be.visible");
  }

  login(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.submit();
  }
}

export const onLoginPage = new LoginPage();
