//System
var $ = window.jQuery = require('../../node_modules/jquery/dist/jquery.min.js');
require('../../node_modules/angular/angular.min.js');
require('../../node_modules/angular-ui-router/release/angular-ui-router.min.js');

//Style
require('../app/login/css/login.css');
require('../app/index/css/index.css');

//Application
var app = angular.module('app',['ui.router']);
require('./services.js')(app);
require('./controllers.js')(app);
require('./routing.js')(app);
