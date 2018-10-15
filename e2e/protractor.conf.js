// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.feature'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  cucumberOpts: {
    compiler: "ts:ts-node/register",
    require: [
      //path starts from this protractor.conf.js
      './src/**/*.steps.ts'
    ]
  },

  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
  }
};
