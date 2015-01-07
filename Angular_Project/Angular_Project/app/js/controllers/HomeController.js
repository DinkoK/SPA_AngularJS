'use strict';

// The HomeController holds the presentation logic for the home screen
app.controller('HomeController',
    function ($scope, $rootScope, adsService, notifyService, pageSize) {
        $scope.adsParams = {
            'startPage': 1,
            'pageSize': pageSize
        };
        $scope.defaultImg = "http://localhost:1034/app/img/no-img.jpg";
        $scope.reloadAds = function () {
            adsService.getAds(
                $scope.adsParams,
                function success(data) {
                    $scope.ads = data;
                },
                function error(err) {
                    notifyService.showError("Cannot load ads", err);
                }
            );
        };
        $scope.reloadAds();

        $scope.$on("categorySelectionChanged", function (event, selectedCategoryId) {
            $scope.adsParams.categoryId = selectedCategoryId;
            $scope.adsParams.startPage = 1;
            $scope.reloadAds();
        });


        $scope.$on("townSelectionChanged", function (event, selectedTownId) {
            $scope.adsParams.townId = selectedTownId;
            $scope.adsParams.startPage = 1;
            $scope.reloadAds();
        });
    }
);
