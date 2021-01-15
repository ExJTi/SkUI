// Karma configuration
// Generated on Tue Jan 16 2018 19:36:35 GMT+0800 (中国标准时间)

const baseWebpackConfig = require('./build/webpack.unit.conf')
module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'test/unit/**/*.spec.js'
    ],

    // list of files / patterns to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/unit/**/*.spec.js': ['webpack', 'sourcemap']
    },

    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-webpack',
      'karma-sourcemap-loader',
      'karma-coverage-istanbul-reporter'
    ],
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['coverage-istanbul'],
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
    browsers: ['Chrome'],
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
    webpack: baseWebpackConfig,

    // 配置覆盖率报告的查看方式配置
    coverageIstanbulReporter: {
      // 可以用什么形式展示 支持以下格式：clover、cobertura、html、json-summary、json、lcov、lcovonly、none、teamcity、text-lcov、text-summary、text
      // 可以看连接 : https://github.com/istanbuljs/istanbul-reports/tree/590e6b0089f67b723a1fdf57bc7ccc080ff189d7/lib
      reports: ['html', 'text-summary'],
      // 结果存放的位置
      dir: 'coverage/',
      // 如果使用webpack和预加载器，可以绕过webpack打破源路径
      fixWebpackSourcePaths: true,
      // 停止输出消息，如`File [$ {filename}]忽略，没有任何东西可以映射
      skipFilesWithNoCoverage: true,
      // 大多数记录接受额外的配置选项。 你可以通过`report-config`选项传递这些
      'report-config': {
        // 配置html
        html: {
          // 输出到 ./coverage/html
          subdir: 'html'
        }
      }
    }
  })
}
