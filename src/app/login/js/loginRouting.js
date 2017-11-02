module.exports={
    '':{
        template: require('../view/login.html'),
        controller: 'loginController'
    },
    'top': {
        template: require('../../commons/top/view/top.html'),
        controller: 'loginController'
    },
    'bottom': {
        template: require('../../commons/bottom/view/bottom.html'),
        controller: 'loginController'
    }
};