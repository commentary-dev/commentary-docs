import { defineConfig } from "@playwright/test";
export default defineConfig({
  testDir: "./ui-qa",
  timeout: 45000,
  fullyParallel: false,
  workers: 1,
  retries: process.env.CI ? 1 : 0,
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL: "http://127.0.0.1:4321",
    headless: true,
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  webServer: {
    command: "npm run preview",
    url: "http://127.0.0.1:4321/docs",
    reuseExistingServer: !process.env.CI,
    timeout: 30000,
  },
});
