// Karma configuration
// Generated on Wed Oct 15 2014 16:28:44 GMT-0500 (COT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'www/lib/ionic/js/angular/angular.min.js',
      'www/lib/ionic/js/angular-ui/angular-ui-router.min.js',
      'www/lib/ionic/js/angular/angular-animate.min.js',
      'www/lib/ionic/js/angular/angular-resource.min.js',
      'www/lib/ionic/js/angular/angular-sanitize.min.js',
      'www/lib/ionic/js/angular/angular-mocks.js',
      'www/lib/ionic/js/ionic.bundle.min.js',
      'www/lib/ionic/js/ionic-angular.min.js',
      'www/js/controllers.js',
      'www/js/services.js',
      'www/js/app.js',
      'spec/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'www/js/**/*.js':'coverage'
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],

    coverageReporter: {type: 'text'},

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
