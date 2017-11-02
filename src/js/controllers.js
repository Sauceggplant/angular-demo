module.exports = function (app) {
    app
    .controller('indexController',require('../app/index/js/indexController.js'))
    .controller('loginController',require('../app/login/js/loginController.js'));
};