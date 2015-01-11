'use strict';
app.controller('AppController', function ($scope, authService, notifyService) {
    $scope.authService = authService;
    $scope.showMyAds = false;

    $scope.ShowMyAds = function () {
        $scope.showMyAds = true;
    };
    $scope.HideMyAdsMenu = function () {
        $scope.showMyAds = false;
    };
    $scope.logout = function () {
        authService.logout();
        notifyService.showInfo('Logout successful');
        $scope.HideMyAdsMenu();
        $location.path("/");
    };
    

})