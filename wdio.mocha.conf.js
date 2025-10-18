exports.config = {
  runner: 'local',
  specs: ['./test-simple.js'],
  maxInstances: 1,
  capabilities: [
    {
      browserName: 'chrome',
      acceptInsecureCerts: true,
      'goog:chromeOptions': { args: ['--headless', '--disable-gpu', '--no-sandbox'] },
    },
  ],
  logLevel: 'info',
  baseUrl: 'https://practicesoftwaretesting.com',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: [],
  framework: 'mocha',
  specFileRetries: 0,
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },
  before: function () {
    browser.setWindowSize(1920, 1080);
  },
};