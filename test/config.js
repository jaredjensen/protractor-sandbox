const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  SELENIUM_PROMISE_MANAGER: false,
  baseUrl: 'about:blank',
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: [
        '--incognito',
        '--headless',
        'start-maximized',
        '--disable-dev-shm-usage',
        '--disable-gpu',
        '--no-sandbox',
      ],
    },
  },
  framework: 'jasmine',
  getPageTimeout: 2000,
  specs: ['./index.js'],
  onPrepare: async () => {
    jasmine.getEnv().addReporter(new SpecReporter({
      displayFailuresSummary: true,
      displayFailuredSpec: true,
      displaySuiteNumber: true,
      displaySpecDuration: true
    }));

    await browser
      .manage()
      .window()
      .maximize()
      .catch((error) => {
        console.log('Failed to get browser', error);
        process.exit(1);
      });
    await browser.waitForAngularEnabled(false);
  },
};