const { onLoginPage } = require("../support/pageObjects/login");
const { onLandingPage } = require("../support/pageObjects/landing");

describe("Login Tests", () => {
  it.only("Form Validation for Blank Input Fields", () => {
    onLoginPage.visit();
    onLoginPage.assertOnLoginPage();
    onLoginPage.submit();
    onLoginPage.assertOnLoginPage();
    onLoginPage.assertErrorMessageContains("Please enter your username.");
    onLoginPage.enterUsername("some_userName");
    onLoginPage.submit();
    onLoginPage.assertOnLoginPage();
    onLoginPage.assertErrorMessageContains("Please enter your password.");
    onLoginPage.clearUsername();
    onLoginPage.enterPassword("somePassword");
    onLoginPage.submit();
    onLoginPage.assertErrorMessageContains("Please enter your username.");
  });

  // it("Login with invalid credentials", () => {
  //   onLoginPage.visit();
  //   onLoginPage.assertOnLoginPage();
  //   onLoginPage.login("invalidUser", "invalidPassword");
  //   onLoginPage.assertInvalidCredentialsMessage();
  //   onLoginPage.assertOnLoginPage();
  // });

  // it("Login with locked user credentials", () => {
  //   onLoginPage.visit();
  //   onLoginPage.assertOnLoginPage();
  //   onLoginPage.login("locked_user", "bank_sauce");
  //   onLoginPage.assertLockedUserMessage();
  //   onLoginPage.assertOnLoginPage();
  // });

  // it("Login with valid credentials", () => {
  //   onLoginPage.visit();
  //   onLoginPage.assertOnLoginPage();
  //   onLoginPage.login("standard_user", "bank_sauce");
  //   onLandingPage.assertOnLandingPage();
  //   onLandingPage.assertUserLoggedIn("standard_user");

    // Add assertions for successful login, e.g., checking for a specific element on the dashboard
  });
});
