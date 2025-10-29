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
    platformName: 'Android',
    'appium:deviceName': 'emulator-5554', // Device ID from 'adb devices'
    'appium:platformVersion': '16',       // Your Android version
    'appium:automationName': 'UiAutomator2',
    'appium:app': './apps/Android.SauceLabs.apk',
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
      command: 'appium'
    }]
  ],

  framework: 'mocha',

  reporters: ['spec'],

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

