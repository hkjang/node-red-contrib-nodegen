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
msg = {};
msg.prefix = 'node-red-contrib-';
msg.fname = 'lower-case';
msg.module = '';
msg.version = '1.0.0';
msg.keywords = 'lower-case';
msg.category = '';
msg.icon = '';
msg.color = '';
// if OS is linux, MAC
msg.dst = '$HOME/.node-red/node_modules/';
// if OS is Window
msg.dst = 'C:/Users/gagag/.node-red/node_modules/';
msg.lang = '';
msg.content = '// name: lower-case\n';
msg.content += '// outputs: 1\n';
msg.content += 'msg.payload = msg.payload.toLowerCase();\n';
msg.content += 'return msg;\n';

return msg;
```

### Results
```text
Success: node-red-contrib-test-module
```

Sample Flow
------
```json
[
  {
    "id": "6d3e3068.04443",
    "type": "inject",
    "z": "c49414ec.9c4508",
    "name": "",
    "props": [
      {
        "p": "payload"
      },
      {
        "p": "topic",
        "vt": "str"
      }
    ],
    "repeat": "",
    "crontab": "",
    "once": false,
    "onceDelay": 0.1,
    "topic": "",
    "payload": "",
    "payloadType": "date",
    "x": 130,
    "y": 60,
    "wires": [
      [
        "fa546363.caa9f"
      ]
    ]
  },
  {
    "id": "fa546363.caa9f",
    "type": "function",
    "z": "c49414ec.9c4508",
    "name": "",
    "func": "msg = {};\nmsg.prefix = 'node-red-contrib-';\nmsg.fname = 'lower-case';\nmsg.module = '';\nmsg.version = '1.0.0';\nmsg.keywords = 'lower-case';\nmsg.category = '';\nmsg.icon = '';\nmsg.color = '';\n// if OS is linux, MAC\nmsg.dst = '/home/server/.node-red/node_modules/';\n// if OS is Window\n// msg.dst = 'C:/Users/user/.node-red/node_modules/';\nmsg.lang = '';\nmsg.content = '// name: lower-case\\n';\nmsg.content += '// outputs: 1\\n';\nmsg.content += 'msg.payload = msg.payload.toLowerCase();\\n';\nmsg.content += 'return msg;\\n';\n\nreturn msg;",
    "outputs": 1,
    "noerr": 0,
    "initialize": "",
    "finalize": "",
    "x": 310,
    "y": 60,
    "wires": [
      [
        "268809eb.cbceb6"
      ]
    ]
  },
  {
    "id": "fa48932.8d7ee7",
    "type": "debug",
    "z": "c49414ec.9c4508",
    "name": "",
    "active": true,
    "tosidebar": true,
    "console": false,
    "tostatus": false,
    "complete": "true",
    "targetType": "full",
    "statusVal": "",
    "statusType": "auto",
    "x": 640,
    "y": 60,
    "wires": []
  },
  {
    "id": "268809eb.cbceb6",
    "type": "nodegen",
    "z": "c49414ec.9c4508",
    "prefix": "",
    "fname": "",
    "module": "",
    "version": "",
    "keywords": "",
    "category": "",
    "icon": "",
    "color": "",
    "dst": "",
    "lang": "",
    "name": "nodegen",
    "x": 490,
    "y": 60,
    "wires": [
      [
        "fa48932.8d7ee7"
      ]
    ]
  }
]

```



