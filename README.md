# angular-demo

A framework for front end : Webpack 3.6.0 + Angular 1.6.6 + Bootstrap 3.3.7 + JQuery 3.2.1 + NodeWebkit 0.24.4

##### 1.init

```
npm install
```

##### 2.build

```
npm run build
```

##### 3.debug

```
npm run dev
```
default address : http://localhost:8080
will show in browser.

##### 4.test

```
npm run test
```
you must be installed node-webkit before run this command,set nw.exe to the PATH environment.

In OS X ,please adjust this content in package.json
```
    "test": "cd dist&&nw ."
```
to
```
    "test": "cd dist&&nwjs ."
```
