'use strict';
app.controller('AppController', function ($scope, authService, notifyService) {
    $scope.authService = authService;
    $scope.logout = function () {
        authService.logout();
        notifyService.showInfo('Logout successful');        
        $location.path("/");
    };

})