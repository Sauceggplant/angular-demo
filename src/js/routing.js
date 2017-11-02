module.exports = function (app) {
    app.config(['$urlRouterProvider','$locationProvider', '$stateProvider', function ($urlRouterProvider,$locationProvider, $stateProvider) {
        $locationProvider.hashPrefix('');
        $urlRouterProvider.otherwise('/login');
        $stateProvider
            .state('index',{
                url: '/index',
                views: require('../app/index/js/indexRouting.js')
            })
            .state('login', {
                url: '/login',
                views: require('../app/login/js/loginRouting.js')
            });
    }]);
};