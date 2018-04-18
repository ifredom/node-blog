/**
 * @private
 * @param {string} staticPath
 * @example express.static = require('serve-static')(staticPath);
 */

var express = require('express');
var serveStatic = require('serve-static');
exports = module.exports = createApplication;

function createApplication(express) {
  var app = express();
  app.use(serveStatic('./'));

  app.listen(3000, function() {
    console.log('server start: http://127.0.0.1:3000');
  });
}
