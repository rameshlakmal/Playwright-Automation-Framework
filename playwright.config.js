import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config({
  path: `./env/.env.${process.env.ENV}`,
});

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  timeout: 100_000,

  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 1 : 1,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */

  reporter: [
    //   ["ortoni-report",
    // {
    //   projectName: "AB Demo Test Project",
    //   authorName: "Ramesh",
    //   testType: '',
    // }],
    ["list"],
    ["dot"],
    ["allure-playwright"],
  ],

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    launchOptions: {
      args: ["--start-maximized"],
    },
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: "https://opensource-demo.orangehrmlive.com/web/index.php",

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
    headless: false,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "retain-on-failure",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "setup",
      testMatch: /.*\.setup\.js/,
    },

    {
      name: "Google Chrome",
      use: {
        viewport: null,
        channel: "chrome",
        storageState: "./.auth/user.json",
      },
      dependencies: ["setup"],
    },

    // {
    //   name: "chromium",
    //   use: {
    //     ...devices["Desktop Chrome"],
    //     deviceScaleFactor: undefined,
    //     viewport: { width: 1920, height: 1080 },
    //     launchOptions: {
    //       args: ["--start-maximized"],
    //     },
    //     storageState: "./.auth/user.json",
    //   },
    //   dependencies: ["setup"],
    // },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
