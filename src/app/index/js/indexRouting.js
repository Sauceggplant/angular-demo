module.exports = {
    'center': {
        template: require('../view/index.html'),
        controller: 'indexController'
    },
    'top': {
        template: require('../../commons/top/view/top.html'),
        controller: 'indexController'
    },
    'left': {
        template: require('../../commons/left/view/left.html'),
        controller: 'indexController'
    },
    'right': {
        template: require('../../commons/right/view/right.html'),
        controller: 'indexController'
    },
    'bottom': {
        template: require('../../commons/bottom/view/bottom.html'),
        controller: 'indexController'
    }
};