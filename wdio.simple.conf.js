exports.config = {
  runner: 'local',
  specs: ['./features/**/*.feature'],
  maxInstances: 1,
  capabilities: [
    {
      browserName: 'chrome',
      acceptInsecureCerts: true,
      'goog:chromeOptions': { 
        args: ['--headless', '--disable-gpu', '--no-sandbox', '--disable-dev-shm-usage'] 
      },
    }
  ],
  logLevel: 'info',
  baseUrl: 'https://practicesoftwaretesting.com',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: [],
  framework: 'cucumber',
  specFileRetries: 1,
  reporters: ['spec'],
  
  cucumberOpts: {
    tagExpression: 'not @skip',
    require: ['./features/test/specs/**/*.js'],
    timeout: 90000,
  },
  
  before: function () {
    browser.setWindowSize(1920, 1080);
  },
};