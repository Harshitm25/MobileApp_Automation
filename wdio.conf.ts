import dotenv from 'dotenv';
dotenv.config();
import allure from '@wdio/allure-reporter';
import fs from 'fs';
import { driver } from '@wdio/globals';
export const config = {
  runner: 'local',
  
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      transpileOnly: true,
      project: 'tsconfig.json'
    }
  },

  specs: [
    './src/specs/*.ts'
  ],

  exclude: [],

  maxInstances: 1,

  capabilities: [{
    platformName: process.env.PLATFORM_NAME,
    'appium:deviceName': process.env.DEVICE_NAME, // Device ID from 'adb devices'
    'appium:platformVersion': process.env.PLATFORM_VERSION,       // Your Android version
    'appium:automationName': process.env.AUTOMATION_NAME,
    'appium:app': process.env.APP_PATH,
    'appium:autoGrantPermissions': true,
    'appium:newCommandTimeout': 300,
    'appium:noReset': true,
    'appium:fullReset': false
  }],

  logLevel: 'info',

  bail: 0,

  baseUrl: 'http://localhost',

  waitforTimeout: 10000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,

  services: [
    ['appium', {
      command: './node_modules/.bin/appium'
    }]
  ],

  framework: 'mocha',

  reporters: [
    ['allure', {
      outputDir: 'allure-results',           // where raw results are stored
      disableWebdriverStepsReporting: false, // logs every WebDriver step
      disableWebdriverScreenshotsReporting: false, // auto adds screenshots
    }],
  ],
  

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
    retries: 0
  },

  before: function () {
    console.log('Starting Android test execution...');
  },

  // Disabled app uninstall cleanup to avoid repeated installs/uninstalls causing relaunch loops
  // beforeSession: async function () {
  // },

  after: function () {
    console.log('Test execution completed');
  },
};

