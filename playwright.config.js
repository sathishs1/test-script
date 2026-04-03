
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './project_test',
  fullyParallel: false,
  workers: 1,
  timeout: 60000,
  forbidOnly: !!process.env.CI,
  retries: 0,
  reporter: 'html',

  projects: [
    {
      name: 'chromium',
      use: {
        headless: false,        // ← Show browser window
        viewport: null,
        trace: 'on-first-retry',
        launchOptions: {
          args: ['--start-maximized'],
        },
      },
    },
    
  ],
});