'use strict';

var app = angular.module('app', ['ngRoute', 'ngResource', 'angular-loading-bar', 'ui.bootstrap.pagination']);

app.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net');
app.constant('pageSize', 5);

app.config(function ($routeProvider) {

    $routeProvider.when('/user/publish-new-ad', {
        templateUrl: 'templates/user/publish-new-ad.html',
        controller: 'UserAdsController'
    });
    $routeProvider.when('/user/UserAds', {
        templateUrl: 'templates/user/UserAds.html',
        controller: 'UserPublishNewAdController'
    });

    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    });
    
    $routeProvider.when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'LoginController'
    });
    $routeProvider.when('/register', {
        templateUrl: 'templates/register.html',
        controller: 'RegisterController'
    });
    $routeProvider.otherwise(
        { redirectTo: '/' }
    );
});
app.run(function ($rootScope, $location, authService) {
    $rootScope.$on('$locationChangeStart', function (event) {
        if ($location.path().indexOf("/user/") !== -1 && !authService.isLoggedIn()) {
            // Authorization check: anonymous site visitors cannot access user routes
            $location.path("/");
        }
    });
});
