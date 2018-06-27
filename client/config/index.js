// 模板版本: 1.3.1
// 查看文档 http://vuejs-templates.github.io/webpack

const path = require('path');
const dllEnv = require('./dll.env')
module.exports = {
  dev: {
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/apiHost': {
        // 匹配所有以/api开始的路径
        target: 'http://127.0.0.1:3003',
        changeOrigin: true,
        pathRewrite: {
          '^/apiHost': ''
        }
      }
    },
    host: 'localhost',
    port: 8869,
    autoOpenBrowser: true,
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
    // webpack编译输出的发布路径
    // => 将 build 的路径前缀修改为 ' ./ '（原本为 ' / '），
    // '/' 在服务器环境中使用
    // './' 在本地开发时使用，而build之后的文件是为了app使用，如同本地使用
    assetsPublicPath: '/',
    productionSourceMap: true,
    devtool: '#source-map', // 或者使用#eval-source-map
    productionGzip: false, // 打包为app时不能开启
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dll: dllEnv
};