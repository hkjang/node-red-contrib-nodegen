const nodegen = require('./lib/nodegen.js');
const fs = require('fs');
module.exports = function (RED) {
  function nodegenFunction(config) {
    RED.nodes.createNode(this, config);
    var self = this;
    this.prefix = config.prefix || "";
    this.name = config.fname || "";
    this.module = config.module || "";
    this.version = config.version || "";
    this.keywords = config.keywords || "";
    this.category = config.category || "";
    this.icon = config.icon || "";
    this.color = config.color || "";
    this.dst = config.dst || "";
    this.lang = config.lang || "";
    this.on('input', function(msg) {
      var data = {};
      data.prefix = self.prefix || msg.prefix;
      data.name = self.fname || msg.fname;
      data.module = self.module || msg.module;
      data.version = self.version || msg.version;
      data.keywords = self.keywords || msg.keywords;
      data.category = self.category || msg.category;
      data.icon = self.icon || msg.icon;
      data.color = self.color || msg.color;
      data.dst = self.dst || msg.dst;
      data.lang = self.lang || msg.lang;

      var options = {};
      var promise;
      // var sourcePath = './sample.js';
      var sourcePath = msg.sourcePath;
      data.src = sourcePath;
      if (msg.content) {
        // .js -> Function node
        data.src = msg.content;
        promise = nodegen.function2node(data, options);
      } else if (/\.json$/.test(sourcePath)) {
        // JSON could be a Function node, or Swagger
        var content = JSON.parse(fs.readFileSync(sourcePath));
        if (Array.isArray(content)) {
          data.src = content;
          promise = nodegen.function2node(data, options);
        }
      } else if (/\.js$/.test(sourcePath)) {
        // .js -> Function node
        data.src = fs.readFileSync(sourcePath);
        promise = nodegen.function2node(data, options);
      } else {
        msg.payload = 'error: Unsupported file type';
        self.send(msg);
      }
      if (promise) {
        promise.then(function (result) {
          msg.payload = 'Success: ' + result;
          self.send(msg);
          self.error('Success: ' + result);
        }).catch(function (error) {
          msg.payload = 'Error: ' + error;
          self.error('Error: ' + error);
          self.error(error.stack);
        });
      }

    });
  }
  RED.nodes.registerType('nodegen', nodegenFunction);
};