const { onLoginPage } = require("../support/pageObjects/login");
const { onLandingPage } = require("../support/pageObjects/landing");

describe("Login Tests", () => {
  beforeEach("Go to login page", () => {
    onLoginPage.visit();
    onLoginPage.assertOnLoginPage();
  });

  it("Form Validation for Blank Input Fields", () => {
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
    onLoginPage.assertOnLoginPage();
    onLoginPage.assertErrorMessageContains("Please enter your username.");
  });

  it("Login with invalid credentials", () => {
    onLoginPage.login("invalidUser", "invalidPassword");
    onLoginPage.assertOnLoginPage();
    onLoginPage.assertErrorMessageContains(
      "The username or password you entered is incorrect.",
    );
  });

  it("Login with locked user credentials", () => {
    onLoginPage.login("locked_user", "bank_sauce");
    onLoginPage.assertOnLoginPage();
    onLoginPage.assertErrorMessageContains(
      "Your account has been suspended. Please contact support.",
    );
  });

  it("Toggle password visibility", () => {
    onLoginPage.enterUsername("some_user");
    onLoginPage.enterPassword("some_password");
    onLoginPage.togglePasswordVisibility();
    onLoginPage.assertVisiblePassword("some_password");
    onLoginPage.togglePasswordVisibility();
    onLoginPage.assertHiddenPassword();
  });

  it("Dashboard Navigation & Session Logout", () => {
    onLoginPage.login("standard_user", "bank_sauce");
    onLandingPage.assertOnLandingPage();
    onLandingPage.assertUserLoggedIn("standard_user");
    onLandingPage.clickLogOutButton();
    onLoginPage.assertOnLoginPage();
  });

  it("Direct unauthorized URL Access", () => {
    onLandingPage.visit();
    onLoginPage.assertOnLoginPage();
  });
});
