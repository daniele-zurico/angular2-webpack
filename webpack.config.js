var webpack = require('webpack');

//detect production or development envirnment
var production = process.env.NODE_ENV === "production";

module.exports = {
    devtool: 'eval-source-map',
    debug: true,

    verbose: true,
    displayErrorDetails: true,
    context: __dirname,
    stats: {
        colors: true,
        reasons: true
    },  
    entry: {
    // Create a vendor bundle with all the base libraries (look down at CommonsChunkPlugin)
    'vendor': [
        'reflect-metadata',
        'angular2/angular2'   
    ],
    // Starting point
    'app': [
        './src/modules/',
    ]},
    // Bundle the contain all the source code
    output: {
        path: __dirname,
        filename: "./dist/bundle.min.js",
   
    },
    // File accepted by webpack
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    // Compiler
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    },
    plugins: [
        // Merge all the vendor in a new bundle
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity,
            filename: './dist/bundle.vendor.min.js'
        }),
        // Create the minify version
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_debugger: false
            },
            output: {
                comments: false
            },
            beautify: false
        }),
      // Prevents the inclusion of duplicate code into your bundle
      new webpack.optimize.DedupePlugin()
    ]
  
};