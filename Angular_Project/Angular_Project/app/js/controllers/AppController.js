'use strict';
app.controller('AppController', function ($scope, authService, notifyService) {
    $scope.authService = authService;
    $scope.logout = function () {
        authService.logout();
        notifyService.showInfo('Logout successful');        
        $location.path("/");
    };
    $scope.showMyAds = false;

    $scope.ShowMyAds = function () {
            $scope.showMyAds = true;
    };
    $scope.HideMyAdsMenu = function () {
        $scope.showMyAds = false;
    };

})