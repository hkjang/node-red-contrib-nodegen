nodegen NodeRED Node
=====================

Installing with npm
-------

`npm install node-red-contrib-nodegen`

Adding nodes to the palette
-------
Using the Editor
You can install nodes directly within the editor by selecting the Manage Palette option from the main menu to open the Palette Manager.

The ‘Nodes’ tab lists all of the modules you have installed. It shows which you are using and whether updates are available for any of them.

The ‘Install’ tab lets you search the catalogue of available node modules and install them.


- inspired by nodegen
- make function node for node-red

Example
------
### Parameters

```javascript
var msg = {
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

return msg;
```

Sample Flow
------
```json


```


JS Code for Node-RED lib
------
```js


```
