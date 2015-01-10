'use strict';

app.controller('EditProfile',
    function ($scope, $location, townsService, authService, notifyService) {
        $scope.userData = { townId: null };
        $scope.towns = townsService.getTowns();


        $scope.register = function (userData) {
            authService.register(userData,
                function success() {
                    notifyService.showInfo("User registration success!");
                    $location.path("/");
                },
                function error(err) {
                    notifyService.showError("User registration failed", err);
                }
            );
        };
    }
);