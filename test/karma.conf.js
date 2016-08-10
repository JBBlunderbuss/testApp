module.exports = function(config) {
  'use strict';

  config.set({
    autoWatch: true,
    basePath: '../',
    frameworks: [
      'jasmine'
    ],
    files: [
      'app/vendor/angular/angular.js',
      'app/vendor/angular-mocks/angular-mocks.js',
      'app/app.js',
      'app/services/**/*.js',
      'app/components/**/*.js',
      'test/spec/**/*.js'
    ],
    exclude: [
    ],
    port: 8080,
    browsers: [
      'PhantomJS'
    ],
    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine'
    ],
    singleRun: false,
    colors: true,
    logLevel: config.LOG_INFO
  });
};
