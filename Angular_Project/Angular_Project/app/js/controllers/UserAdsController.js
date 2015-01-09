'use strict';

// The HomeController holds the presentation logic for the home screen
app.controller('UserAdsController',
    function ($scope, $rootScope, userService, notifyService, pageSize) {
        $scope.adsParams = {
            'startPage': 1,
            'pageSize': pageSize
        };
        $scope.defaultImg = "http://localhost:1034/app/img/no-img.jpg";

        $scope.reloadAds = function () {
            userService.getUserAds(
                $scope.adsParams,
                function success(data) {
                    $scope.userAds = data;
                },
                function error(err) {
                    notifyService.showError("Cannot load ads", err);
                }
            );
        };
        $scope.reloadAds();
    }
);
