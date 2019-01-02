'use strict';

const {resolve, join} = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const pkg = require('./package.json');

const ENV = process.argv.find(arg => arg.includes('NODE_ENV=production')) ? 'production' : 'development';
const IS_DEV_SERVER = process.argv.find(arg => arg.includes('webpack-dev-server'));
const OUTPUT_PATH = IS_DEV_SERVER ? resolve('.') : resolve('dist');

const processEnv = {
  NODE_ENV: JSON.stringify(ENV),
  appVersion: JSON.stringify(pkg.version)
};

/**
 * === Copy static files configuration
 */
const copyStatics = {
  copyWebcomponents: [{
    from: resolve('./node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js'),
    to: join(OUTPUT_PATH, 'vendor'),
    flatten: true
  }, {
    from: resolve('./node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js'),
    to: join(OUTPUT_PATH, 'vendor'),
    flatten: true
  }, {
    from: resolve('./node_modules/@webcomponents/webcomponentsjs/bundles/webcomponents-ce.js'),
    to: join(OUTPUT_PATH, 'vendor', 'bundles'),
    flatten: true
  }, {
    from: resolve('./node_modules/@webcomponents/webcomponentsjs/bundles/webcomponents-sd-ce.js'),
    to: join(OUTPUT_PATH, 'vendor', 'bundles'),
    flatten: true
  }, {
    from: resolve('./node_modules/@webcomponents/webcomponentsjs/bundles/webcomponents-sd-ce-pf.js'),
    to: join(OUTPUT_PATH, 'vendor', 'bundles'),
    flatten: true
  }, {
    from: resolve('./node_modules/@webcomponents/webcomponentsjs/bundles/webcomponents-sd.js'),
    to: join(OUTPUT_PATH, 'vendor', 'bundles'),
    flatten: true
  }],
  copyOthers: [{
    from: 'assets/**',
    context: resolve('./src'),
    to: OUTPUT_PATH
  }, {
    from: resolve('./index.html'),
    to: OUTPUT_PATH,
    flatten: true
  }, {
    from: resolve('./manifest.json'),
    to: OUTPUT_PATH,
    flatten: true
  }],
  copyThirdParty: [{
    from: resolve('node_modules/xtal-chart-istic/chartist.min.*'),
    to: join(OUTPUT_PATH, 'vendor/xtal-chart-istic/'),
    flatten: true
  }]
};

/**
 * Plugin configuration
 */
const renderHtmlPlugins = () =>
  [
    new HtmlWebpackPlugin({
      filename: resolve(OUTPUT_PATH, 'index.html'),
      template: `!!ejs-loader!${resolve('./index.html')}`,
      minify: ENV === 'production' && {
        collapseWhitespace: true,
        removeScriptTypeAttributes: true,
        removeRedundantAttributes: true,
        removeStyleLinkTypeAttributes: true,
        removeComments: true
      },
      inject: true,
      compile: true,
      excludeAssets: [/(bundle|polyfills)(\..*)?\.js$/],
      paths: {
        webcomponents: './vendor/webcomponents-loader.js'
      }
    }),
    new HtmlWebpackExcludeAssetsPlugin(),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer'
    })
  ];

const sharedPlugins = [
  new webpack.DefinePlugin({'process.env': processEnv}),
  ...renderHtmlPlugins()
];
const devPlugins = [
  new CopyWebpackPlugin(
    [].concat(copyStatics.copyWebcomponents, copyStatics.copyThirdParty )
  )
];
const buildPlugins = [
  new CopyWebpackPlugin(
    [].concat(copyStatics.copyWebcomponents, copyStatics.copyOthers)
  ),
  new CleanWebpackPlugin([OUTPUT_PATH], {verbose: true})
];

const plugins = sharedPlugins.concat(IS_DEV_SERVER ? devPlugins : buildPlugins);

module.exports = {
  mode: ENV,
  entry: './src/lit-uduvudu.js',
  output: {
    path: OUTPUT_PATH,
    filename: 'bundle.js'
  },
  devtool: 'cheap-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        // We need to transpile Polymer itself and other ES6 code
        // exclude: /(node_modules)/,
        use: {
          loader: require.resolve('@open-wc/webpack/loaders/import-meta-url-loader.js'),
          options: {
            presets: [[
              '@babel/preset-env',
              {
                targets: {
                  browsers: [
                    // Best practice: https://github.com/babel/babel/issues/7789
                    '>=1%',
                    'not ie 11',
                    'not op_mini all'
                  ]
                },
                debug: true
              }
            ]],
            plugins: [
              ['@babel/plugin-syntax-object-rest-spread', {useBuiltIns: true}],
              '@babel/plugin-syntax-dynamic-import'
            ]
          }
        }
      }
    ]
  },
  plugins,
  optimization: {
    minimizer: [new TerserPlugin({
      extractComments: 'all'
    })]
  },
  devServer: {
    contentBase: OUTPUT_PATH,
    compress: true,
    overlay: {
      errors: true
    },
    host: '0.0.0.0',
    disableHostCheck: true
  }
};

