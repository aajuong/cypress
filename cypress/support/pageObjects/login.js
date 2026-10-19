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

  assertErrorMessageContains(text) {
    cy.get('[data-testid="login-error-message"]')
      .should("be.visible")
      .and("contain", text);
  }

  assertSubmitButtonVisible() {
    cy.get('[data-testid="login-submit-btn"]').should("be.visible");
  }

  assertForgotPasswordLinkVisible() {
    cy.get('[data-testid="forgot-password-link"]').should("be.visible");
  }

  assertVisiblePassword(password) {
    cy.get("#login-password").should("have.attr", "type", "text");
    cy.get("#login-password").should("have.value", password);
    cy.get(".relative button").should(
      "have.attr",
      "aria-label",
      "Hide password",
    );
  }

  assertHiddenPassword() {
    cy.get("#login-password").should("have.attr", "type", "password");
    cy.get(".relative button").should(
      "have.attr",
      "aria-label",
      "Show password",
    );
  }

  togglePasswordVisibility() {
    cy.get(".relative button").click();
  }

  clickForgotPasswordLink() {
    cy.get('[data-testid="forgot-password-link"]').click();
  }

  login(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.submit();
  }
}

export const onLoginPage = new LoginPage();
