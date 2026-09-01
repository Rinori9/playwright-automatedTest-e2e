# Playwright UI Automation Framework

A clean and simple UI test automation framework built with Playwright, TypeScript, and the Page Object Model (POM) pattern.

This project contains UI test automation for a Shopware 6 e-commerce storefront. The implemented test covers the guest checkout flow, while manual exploratory testing was also performed to identify and document application defects.

## Tech Stack

* Playwright — end-to-end UI testing framework
* TypeScript
* Page Object Model (POM) architecture
* dotenv — environment variable management
* Shopware 6 — target application

## Project Structure

```text
playwright-automatedTest-e2e/
│
├── tests/                    # Test specifications (*.spec.ts)
│   └── guest-checkout.spec.ts
│
├── pages/                    # Page Objects
│   ├── HomePage.ts
│   ├── ProductPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
│
├── locators/                 # Locator definitions
│   ├── product.locators.ts
│   ├── cart.locators.ts
│   ├── checkout.locators.ts
│   └── home.locators.ts
│
├── test-data/                # Test data
├── playwright.config.ts
├── package.json
├── tsconfig.json
├── .env.example
└── .gitignore
```

## Installation

Clone the repository and install the project dependencies:

```bash
git clone <Rinori9/playwright-automatedTest-e2e>
cd playwright-automatedTest-e2e
npm install
npx playwright install
```

## Environment Setup

Copy the example environment file and configure the required variables locally:

```bash
cp .env.example .env
```

```text
BASE_URL=https://shopware6-demo.development-s25.com
USERNAME=
PASSWORD=
```

The `.env` file is personal and contains environment-specific configuration — it is not committed to the repository. Only `.env.example` is version-controlled, so that anyone cloning the project knows which variables are required.

## Playwright Setup

Playwright is configured in `playwright.config.ts` with:

* Chromium as the default browser
* HTML reporting
* Screenshot capture on failure
* Trace capture on failure
* Video recording on failure
* Configurable `baseURL` through environment variables

## Automated Test Scenario

The implemented automated test covers the following guest checkout flow:

1. Open the Shopware 6 storefront
2. Search for a product
3. Open the selected product
4. Add the product to the cart
5. Open the cart
6. Proceed to checkout
7. Fill in the billing information
8. Continue to the next checkout step
9. Complete the checkout process

The test uses Page Objects and dedicated locators to keep the test logic clean and maintainable.

## Locator Strategy

The framework uses stable and maintainable locators where possible.

The preferred locator strategy is:

1. ID selectors when available
2. If no ID is available, stable classes, links, attributes, or other reliable selectors
3. Playwright semantic locators when appropriate
4. XPath only when necessary

Since the target application does not expose `data-test-id` attributes, stable CSS classes and semantic attributes (e.g. `href`, `title`) were used as the next-best alternative.

Example:

```typescript
await this.page
    .locator('#personalMail')
    .fill('john.doe@example.com');
```

## How to Run Tests

Run all tests:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run the guest checkout test:

```bash
npx playwright test tests/guest-checkout.spec.ts
```

Run the guest checkout test in headed mode:

```bash
npx playwright test tests/guest-checkout.spec.ts --headed
```

## How to View the Report

After running the tests, open the Playwright HTML report:

```bash
npx playwright show-report
```

If a test fails, Playwright also captures screenshots, videos, and traces according to the configured settings.

## Architecture

```text
Test
  ↓
Page Object
  ↓
Locators
  ↓
Playwright
  ↓
Browser
```

* **Tests** define the test scenarios and validations.
* **Page Objects** contain business-level actions for each application page.
* **Locators** contain the selectors used to interact with UI elements.
* **Playwright** performs browser automation and assertions.

The framework separates test logic, page actions, and locators to improve readability, reusability, and maintainability.

## Manual Testing & Bug Reporting

In addition to automation, manual exploratory testing was performed on the Shopware 6 storefront.

The following issues were identified and documented:

* **BUG_001** — Product quantity becomes 2 after adding one product
* **BUG_002** — Product cannot be added to the cart directly from listing
* **BUG_003** — User can register without selecting a State/Region
* **BUG_004** — Registration accepts an invalid German ZIP code
* **BUG_005** — Validation for long inputs not displayed
* **BUG_006** — Updating product quantity refreshes the entire cart page and causes a noticeable delay

Each bug was documented with:

* Bug ID
* Title
* Environment
* Steps to reproduce
* Expected Result
* Actual Result
* Severity (with justification)
* Supporting screenshots

## What I Would Improve With More Time

* Add explicit waits for dynamic UI elements (such as the off-canvas cart) instead of relying solely on default action timeouts, to make the test more resilient to animation and AJAX timing.
* Extend automation coverage to additional positive test cases from the test plan (e.g. invoice checkout, multi-product checkout), not only the single required guest checkout flow.
* Add automated regression checks for at least one or two of the documented bugs, so future fixes can be verified automatically.
* Run the test suite across multiple browsers (Firefox, WebKit) instead of Microsoft Edge only, to catch cross-browser issues earlier.
* Request or propose `data-test-id` attributes on key storefront elements, to make locators fully independent of styling/markup changes.
* Integrate the test suite into a CI pipeline (e.g. GitHub Actions) to run automatically on every push or pull request.

## Status

* Framework setup complete
* Page Object Model implemented
* Locators separated from page objects
* Guest checkout automation implemented
* Manual exploratory testing completed
* Bug reports documented