const { onLoginPage } = require("../support/pageObjects/login");
const {
  onForgotPasswordPage,
} = require("../support/pageObjects/forgotPassword");

describe("Forgot password flow", () => {
  it("Forgot password flow", () => {
    onLoginPage.visit();
    onLoginPage.clickForgotPasswordLink();
    onForgotPasswordPage.assertOnForgotPasswordPage();
    onForgotPasswordPage.clickBackToSignInButton();
    onLoginPage.assertOnLoginPage();
    onLoginPage.clickForgotPasswordLink();
    onForgotPasswordPage.enterEmailAddress("invalidemail");
    onForgotPasswordPage.assertEmailErrorMessage(
      "Please enter a valid email address.",
    );
    onForgotPasswordPage.enterEmailAddress("user@example.com");
    onForgotPasswordPage.assertSuccessfulEmailRequest();
    onForgotPasswordPage.clickBackToSignInButton();
    onLoginPage.assertOnLoginPage();
  });
});
