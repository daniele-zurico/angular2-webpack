module.exports = function(config) {
    var webpack = require('webpack');
    var path = require('path');
    var webpackConfig = require('./webpack.config.js');

    var preProcessors = {}
    preProcessors[path.join(__dirname, 'test.bundle.js')] = ['webpack', 'sourcemap'];

    config.set({
        basePath: '',
        frameworks: ['jasmine-jquery', 'jasmine'],
        browsers: ['Chrome'],
        reporters: ['dots', 'html'],
        colors: true,
        files: [
            { pattern: path.join(__dirname, 'bower_components/angular/angular.min.js'), watched: false },
            { pattern: path.join(__dirname, 'bower_components/angular-mocks/angular-mocks.js'), watched: false },
            { pattern: path.join(__dirname, 'vendor/typings/*.ts'), watched: true },
            { pattern: path.join(__dirname, 'test.bundle.js'), watched: true }
        ],
        preprocessors: preProcessors,
        webpack: {
            resolve: {
                extensions: webpackConfig.resolve.extensions,
                alias: webpackConfig.resolve.alias,
                modulesDirectories: webpackConfig.resolve.modulesDirectories
            },
            devtool: '#inline-source-map',
            debug: true,
            cache: false,
            watch: false,
            module: webpackConfig.module,
            stats: { colors: true, reasons: true },
            plugins: [
                new webpack.ProvidePlugin({
                    $: "jquery",
                    jQuery: "jquery",
                    "window.jQuery": "jquery",
                    "window.$": "jquery"
                })
            ]
        },
        webpackMiddleware: {
            noInfo: true
        },
        plugins: [
            'karma-webpack',
            'karma-jasmine-ajax',
            'karma-jasmine-jquery',
            'karma-jasmine',
            'karma-phantomjs2-launcher',
            'karma-spec-reporter',
            'karma-chrome-launcher',
            'karma-sourcemap-loader',
            'karma-jasmine-html-reporter-livereload'
        ],
        port: 9878,
        reportSlowerThan: 500,
        captureTimeout: 20000,
        logLevel: config.LOG_INFO,
        singleRun: false
    });
};