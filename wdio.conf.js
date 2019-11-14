const isCI = process.env.CI;
const config = {
    runner: 'local',
    specs: [
        './src/specs/**.js'
    ],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
      browserName: 'chrome',
    }],
    maxInstances: 4,
    logLevel: 'silent',
    bail: 1,
    baseUrl: 'https://www.google.com/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    chromeDriverArgs: ['--port=4444'], // default for the chromeDriver Docker image
    chromeDriverLogs: './',
    port: 4444, // default for the chromeDriver Docker image
    path: '/',
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 30000,
        bail: true
    }
}

if (isCI) {
  config.hostname = 'chromedriver';
}

exports.config = config;
