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
    this.clearUsername().type(username);
  }

  clearUsername() {
    return cy.get("#login-username").clear();
  }

  enterPassword(password) {
    this.clearPassword().type(password);
  }

  clearPassword() {
    return cy.get("#login-password").clear();
  }

  submit() {
    cy.get('[data-testid="login-submit-btn"]').click();
  }

  assertInvalidCredentialsMessage() {
    cy.get('[data-testid="login-error-message"]')
      .should("be.visible")
      .and("contain", "The username or password you entered is incorrect.");
  }

  assertErrorMessageContains(text) {
    cy.get('[data-testid="login-error-message"]')
      .should("be.visible")
      .and("contain", text);
  }

  assertLockedUserMessage() {
    cy.get('[data-testid="login-error-message"]')
      .should("be.visible")
      .and(
        "contain",
        "Your account has been suspended. Please contact support.",
      );
  }

  assertBlankUsernameMessage() {
    cy.get('[data-testid="login-error-message"]')
      .should("be.visible")
      .and("contain", "Username is required.");
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
