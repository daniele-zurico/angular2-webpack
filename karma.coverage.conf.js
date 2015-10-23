module.exports = function(config) {
    var webpack = require('webpack');
    var path = require('path');
    var webpackConfig = require('./webpack.config.js');

    var preProcessors = {}
    preProcessors[path.join(__dirname, 'test.bundle.js')] = ['webpack'];
    preProcessors[path.join(__dirname, 'test/{!(*.spec), !(*.d)}.ts')] = ['coverage'];

    config.set({
        basePath: '',
        frameworks: ['jasmine-jquery', 'jasmine'],
        browsers: ['PhantomJS2'],
        reporters: ['coverage'],
        colors: true,
        files: [
            //{ pattern: path.join(__dirname, 'bower_components/angular/angular.min.js'), watched: false },
            //{ pattern: path.join(__dirname, 'bower_components/angular-mocks/angular-mocks.js'), watched: false },
            //{ pattern: path.join(__dirname, 'vendor/typings/*.ts'), watched: false },
            { pattern: path.join(__dirname, 'test.bundle.js'), watched: true }
        ],
        preprocessors: preProcessors,
        coverageReporter: {
            dir: path.join(__dirname, 'target/coverage'),
            instrumenter: {
                '**/*.ts': 'istanbul'
            },
            instrumenterOptions: {
                istanbul: {
                    noCompact: true,
                    embedSource: true
                }
            },
            reporters: [
                { type: 'html' },
                { type: 'text-summary' },
            ]
        },
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
            watchOptions: {
                aggregateTimeout: 1500,
                poll: false
            },
            module: {
                loaders: webpackConfig.module.loaders,
                postLoaders: [
                    {
                        test: /\.ts$/,
                        exclude: [
                            /node_modules\//,
                            /bower_components\//,
                            /\.spec.js/,
                            /\.spec.ts/,
                            /meta\//,
                            /target\//,
                            /test-helper.js$/,
                            /lb-services.js$/ // generated file
                        ],
                        loader: path.resolve(__dirname, 'vendor/karma/istanbul-instrumenter-loader')
                    }
                ]
            },
            stats: { colors: true, reasons: true },
            plugins: [
                new webpack.optimize.AggressiveMergingPlugin(),
                new webpack.optimize.DedupePlugin(),
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
            'karma-coverage',
            'karma-jasmine-ajax',
            'karma-jasmine-jquery',
            'karma-jasmine',
            'karma-phantomjs2-launcher',
            'karma-spec-reporter',
            'karma-chrome-launcher',
            'karma-source-map-support',
            'karma-webpack'
        ],
        port: 9878,
        reportSlowerThan: 500,
        captureTimeout: 20000,
        logLevel: config.LOG_INFO,
        singleRun: true
    });
};