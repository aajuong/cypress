# Cypress login tests

[![End-to-End Tests](https://github.com/aajuong/cypress/actions/workflows/cypress.yml/badge.svg)](https://github.com/aajuong/cypress/actions/workflows/cypress.yml)

Cypress end-to-end tests for the login and forgot-password flows of the public practice site [qaplayground.com/bank](https://qaplayground.com/bank).

The same scenarios have been ported to Playwright so the two tools can be compared side by side: [aajuong/playwright](https://github.com/aajuong/playwright).

## What is covered

7 tests:

- Blank-field validation on the login form
- Login with invalid credentials
- Login with a locked account
- Show and hide password toggle
- Dashboard navigation and logout
- Direct access to the dashboard without logging in
- Forgot-password flow, including invalid and valid email

## Project layout

```
cypress/e2e/                    Spec files
cypress/support/pageObjects/    Page objects (login, landing, forgot password)
cypress/support/commands.js     Custom commands
cypress/fixtures/               Static test data
cypress.config.js               Base URL and run settings
```

## What it demonstrates

- Page Object Model with reusable assertion methods
- `data-testid` selectors where the application provides them
- `baseUrl` configuration and relative navigation
- CI with GitHub Actions on every push and pull request to `main`

## Getting started

Requires Node.js (LTS).

```bash
npm ci
npx cypress open    # interactive runner
npx cypress run     # headless run
```

`npm test` is a shortcut for `cypress run`.

## Continuous integration

The workflow in `.github/workflows/cypress.yml` runs on pushes and pull requests to `main`, and can also be started manually. It runs headless in Chrome. If a test fails, the screenshots are uploaded as the `cypress-screenshots` artifact and kept for 14 days. Videos are switched off.

## Notes

This is a small practice project. The tests run against a third-party demo site, so a failure can come from that site changing as well as from the code here.
