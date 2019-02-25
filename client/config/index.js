// 模板版本: 1.3.1
// 查看文档 http://vuejs-templates.github.io/webpack

const path = require('path');
const dllEnv = require('./dll.env')

module.exports = {
  dev: {
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/proxyapi': {
        // 匹配所有以/api开始的路径
        target: ' https://www.easy-mock.com/mock/59a8d6c14006183e48ef9caa/answer',
        changeOrigin: true,
        pathRewrite: {
          '^/proxyapi': ''
        }
      },
      '/zhihu': {
        // 匹配所有以/zhihu开始的路径
        target: 'https://www.zhihu.com',
        changeOrigin: true,
        pathRewrite: {
          '^/zhihu': ''
        }
      },
      '/zhihuribao': {
        // 匹配所有以/zhihuribao开始的路径
        target: 'https://news-at.zhihu.com/api',
        changeOrigin: true,
        pathRewrite: {
          '^/zhihuribao': ''
        }
      },
      '/douban': {
        // 匹配所有以/douban开始的路径
        target: 'https://api.douban.com',
        changeOrigin: true,
        pathRewrite: {
          '^/douban': ''
        }
      },
      '/baidu': {
        // 匹配所有以/douban开始的路径
        target: 'https://www.baidu.com/s',
        changeOrigin: true,
        pathRewrite: {
          '^/baidu': ''
        }
      }
    },
    host: 'localhost',
    port: 3103,
    autoOpenBrowser: false,
    errorOverlay: true, // 是否开启报错提示
    notifyOnErrors: true, // 是否开启错误消息通知，类似qq通知
    poll: false, // 在NFS文件系统中可能不能起作用，到时无法查看到文件的变化情况，默认true
    devtool: 'cheap-module-eval-source-map',
    cacheBusting: true,
    cssSourceMap: true,
    useEslint: false, // 启用eslint语法检测
    showEslintErrorsInOverlay: false
  },
  build: {
    index: path.resolve(__dirname, '../dist/index.html'),
    // webpack输出的目标文件夹路径
    assetsRoot: path.resolve(__dirname, '../dist'),
    // webpack编译输出的二级文件夹
    assetsSubDirectory: 'static',
    // webpack编译输出的发布路径。将assetsPublicPath（默认为'/'）修改为 ' ./ '，在本地浏览器中可打开使用
    assetsPublicPath: '/',
    productionSourceMap: true,
    devtool: '#source-map', // 或者使用#eval-source-map
    productionGzip: false, // 打包为app时不能开启
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dll: dllEnv
};
