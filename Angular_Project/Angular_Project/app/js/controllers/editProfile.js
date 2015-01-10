'use strict';

app.controller('EditProfile',
    function ($scope, $location, townsService, authService, userService, notifyService) {
        $scope.userData = { townId: null };
        $scope.towns = townsService.getTowns();

        $scope.getUserInfo = function () {
            userService.getUserInfo(
                $scope.userParams,
                function success(data) {
                    $scope.userInfo = data;
                },
                function error(err) {
                    notifyService.showError("Cannot load user Info!!!", err);
                }
            );
        };
        $scope.getUserInfo();
        //$scope.editProfile = function (userData) {
        //    userService.register(userData,
        //        function success() {
        //            notifyService.showInfo("User registration success!");
        //            $location.path("/");
        //        },
        //        function error(err) {
        //            notifyService.showError("User registration failed", err);
        //        }
        //    );
        //};
    }
);