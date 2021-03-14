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
msg.fname = 'test-module';
msg.module = '';
msg.version = '1.0.0';
msg.keywords = 'test-module';
msg.category = '';
msg.icon = '';
msg.color = '';
msg.dst = '' || '.';
msg.lang = ''
msg.content = '// name: lower-case\n'
msg.content += '// outputs: 1\n'
msg.content += 'msg.payload = msg.payload.toLowerCase();\n'
msg.content += 'return msg;\n'

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
    "id": "6bedc977.bd2228",
    "type": "nodegen",
    "z": "66670ffc.769f2",
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
    "x": 520,
    "y": 240,
    "wires": [
      [
        "e0fead51.4e652"
      ]
    ]
  },
  {
    "id": "9d48e0f8.ce17",
    "type": "inject",
    "z": "66670ffc.769f2",
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
    "x": 160,
    "y": 240,
    "wires": [
      [
        "d521d847.33f398"
      ]
    ]
  },
  {
    "id": "d521d847.33f398",
    "type": "function",
    "z": "66670ffc.769f2",
    "name": "",
    "func": "msg = {};\nmsg.prefix = 'node-red-contrib-';\nmsg.fname = 'test-module';\nmsg.module = '';\nmsg.version = '1.0.0';\nmsg.keywords = 'test-module';\nmsg.category = '';\nmsg.icon = '';\nmsg.color = '';\nmsg.dst = '' || '.';\nmsg.lang = ''\nmsg.content = '// name: lower-case\\n'\nmsg.content += '// outputs: 1\\n'\nmsg.content += 'msg.payload = msg.payload.toLowerCase();\\n'\nmsg.content += 'return msg;\\n'\n\nreturn msg;\n",
    "outputs": 1,
    "noerr": 0,
    "initialize": "",
    "finalize": "",
    "x": 340,
    "y": 240,
    "wires": [
      [
        "6bedc977.bd2228"
      ]
    ]
  },
  {
    "id": "e0fead51.4e652",
    "type": "debug",
    "z": "66670ffc.769f2",
    "name": "",
    "active": true,
    "tosidebar": true,
    "console": false,
    "tostatus": false,
    "complete": "true",
    "targetType": "full",
    "statusVal": "",
    "statusType": "auto",
    "x": 670,
    "y": 240,
    "wires": []
  }
]

```



