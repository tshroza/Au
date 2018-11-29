// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const puppeteer = require('puppeteer');

exports.config = {
  allScriptsTimeout: 45000,
  restartBrowserBetweenTests: true,

  // Single browser
  capabilities: {
    browserName: 'chrome',
    chromeOptions: { 
        args: ['--headless', '--disable-gpu', '--window-size=1600x1200'],
        binary: puppeteer.executablePath(),
    },
    shardTestFiles: false,
    maxInstances: 1
  },

  // Multiple browsers
  // multiCapabilities: [{
  //   browserName: 'chrome',
  //   chromeOptions: { 
  //     args: ['--headless', '--disable-gpu', '--window-size=1600x1200'],
  //     binary: puppeteer.executablePath(),
  //   },
  //   shardTestFiles: false,
  //   maxInstances: 1
  //   },{
  //     browserName: 'firefox',
  //     firefoxOptions: {
  //       args: ['--headless']
  //     },
  //     'moz:firefoxOptions': {
  //       args: [ "--headless", '--window-size=1600,1200' ]
  //     },
  //     shardTestFiles: false,
  //     maxInstances: 1
  //   }
  // ],

  directConnect: true,
  baseUrl: 'http://localhost:4200/',

  // Specs here are the cucumber feature files
  specs: [
    './**/*.feature'
  ],

  // Suites
  suites: {
    'expenses': 'expense/expense.feature', // ng e2e --suite=expenses
    'login': 'login/login.feature' // ng-e2e --suite=login
  },

  // Use a custom framework adapter and set its relative path
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  // cucumber command line options
  cucumberOpts: {
    // require step definition files before executing features
    require: ['./**/*.steps.ts'],
    // <string[]> (expression) only execute the features or scenarios with tags matching the expression
    tags: [],
    // <boolean> fail if there are any undefined or pending steps
    strict: true,
    // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    format: [
      'progress:output.txt',
      'json:results.json',
    ],
    // <boolean> invoke formatters without executing steps
    dryRun: false,
    //parallel: 1,
    // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    compiler: []
  },

  // Enable TypeScript for the tests
  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });

    const chai = require('chai');
    const chaiAsPromised = require('chai-as-promised');

    // Load chai-as-promised support
    chai.use(chaiAsPromised);
    chai.should();

   },

  //  afterEach() {
  //   // browser.executeScript('window.sessionStorage.clear();');
  //   // browser.executeScript('window.localStorage.clear();');
  //   // browser.executeScript('')
  //   browser.restart();
  // }
};