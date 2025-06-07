# Playwright Automation Framework for OrangeHRM

## 1. Framework Overview

This is an automated testing framework built using Playwright with JavaScript/TypeScript, designed to test the OrangeHRM web application. It provides a robust and maintainable structure for writing end-to-end tests.

**Key Features:**

*   **Page Object Model (POM):** Organizes UI interactions into reusable page-specific classes, enhancing test maintenance and readability.
*   **Centralized Locator Strategy:** UI element selectors are managed in a dedicated `locators` directory, making them easy to update.
*   **Cross-Browser Testing:** Configured to run tests across Chromium (Google Chrome), Firefox, and WebKit (Safari) using Playwright's browser management.
*   **Allure Reporting:** Generates comprehensive and interactive test execution reports.
*   **Environment Configuration:** Supports different test environments (e.g., staging, production) using `.env` files.
*   **ESLint Integration:** Enforces code style and quality standards.
*   **Custom Logging:** Includes a simple logging utility for better debugging and traceability.
*   **GitHub Actions CI/CD:** Includes a workflow for running tests automatically and deploying reports to GitHub Pages.
*   **Fixtures:** Uses Playwright fixtures for setting up test-specific dependencies and page objects.

## 2. Project Structure

The project follows a standard structure for Playwright test automation:

```
.
├── .auth/                  # Stores authentication state files (e.g., user.json)
├── .github/                # GitHub Actions CI/CD workflows
│   └── workflows/
│       └── playwright.yml  # Main CI workflow
├── allure-report/          # Generated Allure HTML report (after npm run allure:generate)
├── allure-results/         # Raw Allure results (JSON files)
├── config/                 # Environment configuration files
│   ├── .env.prod           # Production environment variables
│   └── .env.staging        # Staging environment variables
├── fixtures/               # Custom Playwright test fixtures
│   └── fixtures.js
├── locators/               # Centralized UI element locators
│   ├── LoginLocators.js
│   ├── PIMLocators.js
│   ├── SideNavigationLocators.js
│   └── LocatorManager.js   # Manages and exports all locators
├── node_modules/           # Project dependencies (managed by npm)
├── pages/                  # Page Object Model classes
│   ├── LoginPage.js
│   ├── SidenNavigation.js  # (Note: "Siden" likely a typo for "Side")
│   └── PIM/
│       ├── PIMCreatePage.js
│       └── PIMIndexPage.js
├── test-data/              # Static test data files
│   └── staging-env/
│       └── test-data.json
├── tests/                  # Test script files (specs)
│   ├── auth.setup.js       # Authentication setup test
│   └── EmployeeTests.spec.js
├── utils/                  # Utility scripts and helper functions
│   ├── Logger.js
│   └── commonactions.js
├── .gitignore              # Specifies intentionally untracked files
├── eslint.config.mjs       # ESLint configuration
├── package-lock.json       # Records exact versions of dependencies
├── package.json            # Project metadata and dependencies
├── playwright.config.js    # Playwright configuration file
└── README.md               # This file
```

## 3. Prerequisites

*   **Node.js:** LTS version (e.g., 18.x, 20.x or higher) is recommended. You can download it from [nodejs.org](https://nodejs.org/).
*   **Browsers:** Playwright can automatically install the necessary browser binaries. This is typically handled during the `npm ci` step. If you need to install them manually, run `npx playwright install`.

## 4. Setup Instructions

1.  **Clone the Repository:**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  **Install Dependencies:**
    This command installs all project dependencies listed in `package.json` and `package-lock.json`. It also automatically runs `npx playwright install` to download the required browser binaries.
    ```bash
    npm ci
    ```

3.  **Set Up Environment Variables:**
    The framework uses `.env` files located in the `config/` directory (e.g., `config/.env.staging`, `config/.env.prod`) to manage environment-specific configurations like base URLs or API endpoints.

    *   The `playwright.config.js` file loads the appropriate `.env` file based on the `ENV` environment variable you set before running tests. For example, if you set `ENV=staging`, it will load `config/.env.staging`.
    *   **Setting the `ENV` variable:**
        *   On Linux/macOS: `export ENV=staging`
        *   On Windows (Command Prompt): `set ENV=staging`
        *   On Windows (PowerShell): `$env:ENV="staging"`
        *   Alternatively, you can prefix your test commands: `ENV=staging npx playwright test`
    *   Ensure the required `.env` files (e.g., `config/.env.staging`) exist and contain the necessary variables. If template files are provided (e.g., `.env.template`), copy them to the appropriate name and fill in the values.

4.  **Run Initial Authentication Setup:**
    The framework includes an authentication setup step that logs in and saves the authentication state (e.g., cookies, local storage) to a file in the `.auth/` directory. This state is then reused by other tests, significantly speeding up test execution by avoiding repeated logins.
    Run the setup project directly:
    ```bash
    npx playwright test --project=setup
    ```
    This step is also automatically run as a dependency before tests that require authentication.

## 5. Running Tests

*   **Basic Command (runs all tests based on default configuration):**
    ```bash
    npm test
    ```
    (This script is defined in `package.json` and typically calls `npx playwright test`)

*   **Running with a Specific Environment:**
    Ensure the `ENV` variable is set to point to your desired configuration (e.g., `staging` or `prod`).
    ```bash
    ENV=staging npm test
    # OR
    ENV=staging npx playwright test
    ```

*   **Running Specific Test Files or Tests:**
    *   To run a specific test file:
        ```bash
        npx playwright test tests/EmployeeTests.spec.js
        ```
    *   To run a test with a specific title (grep):
        ```bash
        npx playwright test -g "Create Employee"
        ```

*   **Running in Specific Browsers:**
    Projects are defined in `playwright.config.js`. To run tests against a specific browser project:
    ```bash
    npx playwright test --project="Google Chrome"
    npx playwright test --project="firefox"
    npx playwright test --project="webkit"
    ```
    To run against all configured browsers (sequentially or in parallel based on config):
    ```bash
    npx playwright test
    ```

*   **Headless/Headed Mode:**
    Headless mode is configured in `playwright.config.js` and is typically enabled by default for CI environments (when the `CI` environment variable is true) and disabled for local runs. You can modify `playwright.config.js` or use Playwright's command-line options (`--headed`) to override this.

## 6. Locator Strategy

This framework employs a centralized locator strategy to improve maintainability and readability of tests.

*   **Definition:** Locators (selectors for UI elements) are defined as constants in dedicated files within the `locators/` directory (e.g., `PIMLocators.js`, `LoginLocators.js`).
*   **Management:** The `locators/LocatorManager.js` file aggregates and exports all locators, providing a single point of access.
*   **Usage:** Page Object classes (in `pages/`) import the necessary locators from `LocatorManager.js` instead of defining them inline.

**Guidance for Choosing Resilient Selectors:**

*   **Prefer user-facing attributes:** Use roles, text, labels, and placeholders that are visible to users. Playwright's `getByRole()`, `getByText()`, `getByLabel()`, `getByPlaceholder()` are excellent for this.
*   **Unique and Stable Attributes:** Use `data-testid`, `id`, or other unique attributes that are unlikely to change.
*   **Avoid brittle XPath or CSS selectors:** Steer clear of selectors that rely heavily on DOM structure (e.g., `div > div:nth-child(2)`) as these break easily with UI changes.
*   **Scope locators:** When necessary, chain locators to find elements within a specific section of the page.

## 7. Page Object Model (POM)

The Page Object Model is a design pattern used to create a clear separation between test scripts and page-specific code.

*   **Structure:** Page Objects are implemented as classes in the `pages/` directory (e.g., `LoginPage.js`, `PIMCreatePage.js`). Each class represents a page or a significant component of the application.
*   **Responsibilities:**
    *   Encapsulate methods that represent user interactions on that page (e.g., `login(username, password)`, `fillCreateEmployeeForm(data)`).
    *   Hold the locators for elements on the page, typically by importing them from `LocatorManager`.
*   **Fixtures:** Page Objects are instantiated and provided to test scripts via custom Playwright fixtures defined in `fixtures/fixtures.js`. This simplifies test setup and promotes reusability. Example:
    ```javascript
    // In fixtures.js
    PimCreatePage: async ({ page }, use) => {
      await use(new PIMCreatePage(page));
    },

    // In a test file
    test('some test', async ({ PimCreatePage }) => {
      await PimCreatePage.someMethod();
    });
    ```

## 8. Reporting

The framework is integrated with Allure for generating detailed and interactive test reports.

*   **Generating the Report:**
    After test execution, raw Allure results are stored in the `allure-results/` directory. To generate the HTML report:
    ```bash
    npm run allure:generate
    ```
    This command cleans previous results and generates a new report in `allure-report/`.

*   **Opening the Report:**
    To open the latest generated report in your web browser:
    ```bash
    npm run allure:open
    ```

*   **Serving the Report (Live View):**
    To serve the report locally and see updates if you regenerate it:
    ```bash
    npm run allure:serve
    ```

*   **CI Integration:** The GitHub Actions workflow (`.github/workflows/playwright.yml`) is configured to automatically generate the Allure report and deploy it to GitHub Pages upon completion of the test run.

## 9. Logging

A basic logging utility is provided in `utils/Logger.js` to enhance test traceability and debugging.

*   **Usage:**
    Import the logger and use its static methods:
    ```javascript
    import Logger from '../utils/Logger.js';

    Logger.info('This is an informational message.');
    Logger.error('This is an error message.');
    ```
    Log messages include a timestamp and the log level (INFO, ERROR, DEBUG).

*   **Conditional Debug Logs:**
    Debug logs can be enabled by setting the `DEBUG_LOGS` environment variable to `true`:
    ```bash
    DEBUG_LOGS=true npm test
    ```
    Example: `Logger.debug('This is a debug message.');`

## 10. Contributing

Contributions to enhance the framework are welcome.

*   **Coding Style:** The project uses ESLint to enforce a consistent code style. Please run `npx eslint . --fix` before committing changes to automatically format your code and check for linting errors.
*   **Adding New Tests:**
    *   Create new test files (e.g., `tests/MyNewFeature.spec.js`).
    *   Utilize existing or create new Page Objects and locators as needed.
    *   Leverage fixtures for setup.
*   **Adding New Page Objects:**
    *   Create new Page Object classes in the `pages/` directory.
    *   Define element locators in the appropriate file under `locators/` and add them to `LocatorManager.js`.
    *   Add the new Page Object to `fixtures/fixtures.js`.
*   **Branching Strategy:** (If applicable, describe your project's branching strategy, e.g., feature branches, main/develop).

---
This README provides a comprehensive guide to understanding, setting up, and working with this Playwright automation framework.
```
