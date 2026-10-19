export class ForgotPasswordPage {
  visit() {
    cy.visit("/forgot-password");
  }

  assertOnForgotPasswordPage() {
    cy.get('[data-testid="forgot-password-card"] p').should(
      "contain",
      "Enter the email address associated with your account and we'll send you a link to reset your password.",
    );
    cy.get('[data-testid="forgot-password-submit-btn"]').should("be.visible");
    cy.get('[data-testid="back-to-login-link"]').should("be.visible");
  }

  assertSuccessfulEmailRequest() {
    cy.get('[data-testid="forgot-password-success-msg"]').should(
      "contain",
      "If an account with that email exists, you'll receive a reset link shortly.",
    );
    cy.get('[data-testid="forgot-password-success"] p')
      .last()
      .should("contain", "Check your spam folder if you don't see it.");
  }

  assertEmailErrorMessage(text) {
    cy.get('[data-testid="forgot-password-error"]').should("contain", text);
  }

  enterEmailAddress(email) {
    cy.get('[data-testid="forgot-email-input"]').clear().type(email);
    this.clickSendResetLinkButton();
  }

  clickBackToSignInButton() {
    cy.get('[data-testid="back-to-login-link"]').click();
  }

  clickSendResetLinkButton() {
    cy.get('[data-testid="forgot-password-submit-btn"]').click();
  }
}

export const onForgotPasswordPage = new ForgotPasswordPage();
