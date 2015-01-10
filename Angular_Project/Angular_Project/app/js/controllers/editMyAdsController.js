'use strict';

// The HomeController holds the presentation logic for the home screen
app.controller('editMyAdsController',
    function ($scope, $rootScope, userService, notifyService, pageSize) {
        $scope.adsParams = {
            'startPage': 1,
            'pageSize': pageSize
        };
        $scope.defaultImg = "http://localhost:1034/app/img/no-img.jpg";

        $scope.getUserAd = function () {
            userService.getuserAdByID(
                $scope.adsParams,
                function success(data) {
                    $scope.userAdById = data;
                   
                },
                function error(err) {
                    notifyService.showError("Cannot load ads", err);
                }
            );
        };
      
    }
);
