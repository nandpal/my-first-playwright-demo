const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30_000,
  reporter: 'html',
  use: {
    headless: true,
    trace: 'on-first-retry'
  }
});
