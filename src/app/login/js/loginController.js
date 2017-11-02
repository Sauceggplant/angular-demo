module.exports=['$scope','$state', function ($scope,$state) {
    $scope.account = "No Login";
    $scope.tips = "0";
    $scope.login = function(){
        $state.go('index');    
    }
}];