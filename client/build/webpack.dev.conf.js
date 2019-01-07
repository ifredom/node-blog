'use strict';
const utils = require('./utils');
const webpack = require('webpack');
const config = require('../config');
const merge = require('webpack-merge');
const path = require('path');
const baseWebpackConfig = require('./webpack.base.conf');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const portfinder = require('portfinder');
const AssetsPlugin = require('assets-webpack-plugin'); // 生成文件名，配合HtmlWebpackPlugin增加打包后dll的缓存

const {
  GuessPlugin
} = require('guess-webpack');
var os = require('os');
var HappyPack = require('happypack');


const HOST = process.env.HOST;
const PORT = process.env.PORT && Number(process.env.PORT);

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.dev.cssSourceMap,
      usePostCSS: true
    })
  },
  devtool: config.dev.devtool,
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [{
        from: /.*/,
        to: path.posix.join(config.dev.assetsPublicPath, 'index.html')
      }]
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay ? {
      warnings: false,
      errors: true
    } : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true,
    watchOptions: {
      poll: config.dev.poll
    },
    before(app) {

    }
  },
  plugins: [
    // new HappyPack({
    //   id: 'happybabel',
    //   loaders: ['babel-loader?cacheDirectory=true'],
    //   threadPool: HappyPack.ThreadPool({
    //     size: os.cpus().length
    //   })
    // }),
    // 谷歌统计上报
    // new GuessPlugin({
    //   GA: 'UA-119554860-1',
    //   mode: 'gatsby',
    //   debug: true,
    //   runtime: {
    //     delegate: true,
    //     basePath: '/',
    //     prefetchConfig: {
    //       '4g': 0.15,
    //       '3g': 0.3,
    //       '2g': 0.45,
    //       'slow-2g': 0.6
    //     },
    //   },
    //   routeProvider: false, // In order to skip the metadata collection and use the raw GA report set
    //   period: {
    //     startDate: new Date('mm/dd/yyyyy'),
    //     endDate: new Date('mm/dd/yyyyy')
    //   }
    // }),
    // 引入vendor.dll.js 文件
    // new webpack.DllReferencePlugin({
    //   context: __dirname,
    //   manifest: require('../dist/vendor-manifest.json'), // 指向生成的manifest.json
    // }),
    new AssetsPlugin({
      filepath: require.resolve("../dist/vendor.dll.js"),
      hash: true
    }),
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      libJsName: config.dll.buildDir.js,
      libCssName: config.dll.buildDir.css,
      inject: true
    }),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../static'),
      to: config.dev.assetsSubDirectory,
      ignore: ['.*']
    }])
  ]
});
module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port;
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err);
    } else {
      process.env.PORT = port;
      devWebpackConfig.devServer.port = port;

      devWebpackConfig.plugins.push(
        new FriendlyErrorsPlugin({
          compilationSuccessInfo: {
            messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`]
          },
          onErrors: config.dev.notifyOnErrors ? utils.createNotifierCallback() : undefined
        })
      );
      resolve(devWebpackConfig);
    }
  });
});