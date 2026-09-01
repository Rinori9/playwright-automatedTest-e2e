import dotenv from 'dotenv'; 
dotenv.config(); 

import {defineConfig, devices} from '@playwright/test';
export default defineConfig({ 
 
  testDir: './tests', 
  
 
  timeout: 30 * 1000, 
  
  
  expect: { 
    timeout: 5 * 1000, 
  }, 
  
  
  fullyParallel: true, 
  
 
  forbidOnly: !!process.env.CI, 

  retries: process.env.CI ? 1 : 0, 
  
  workers: process.env.CI ? 1 : undefined, 
  
  reporter: [['html', { open: 'never' }]], 
  
  use: { 
   
    baseURL: process.env.BASE_URL || 'https://example.com', 
  
   
    screenshot: 'only-on-failure', 
  
   
    trace: 'on-first-retry', 
  
    
    video: 'retain-on-failure', 
  }, 
  
  
  projects: [ 
    { 
      name: 'chromium', 
      use: { ...devices['Desktop Chrome'] }, 
    }, 
  ], 
});