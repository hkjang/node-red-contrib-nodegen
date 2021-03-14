const nodegen = require('./lib/nodegen');
const fs = require('fs');

var data = {
    prefix: 'node-red-contrib-',
    name: 'test-module',
    module: '',
    version: '1.0.0',
    keywords: 'test-module',
    category: '',
    icon: '',
    color: '',
    dst: '' || '.',
    lang: ''
};
var options = {};
var promise;
var sourcePath = './sample.js';
if (sourcePath) {
    data.src = sourcePath;
    if (/\.json$/.test(sourcePath)) {
        // JSON could be a Function node, or Swagger
        var content = JSON.parse(fs.readFileSync(sourcePath));
        if (Array.isArray(content)) {
            data.src = content;
            promise = nodegen.function2node(data, options);
        }
    } else if (/\.js$/.test(sourcePath)) {
        // .js -> Function node
        var content = fs.readFileSync(sourcePath);
        data.src = content;
        promise = nodegen.function2node(data, options);
    } else {
        console.error('error: Unsupported file type');

        return;
    }
    if (promise) {
        promise.then(function (result) {
            console.log('Success: ' + result);
        }).catch(function (error) {
            console.log('Error: ' + error);
            console.log(error.stack);
        });
    }
}
