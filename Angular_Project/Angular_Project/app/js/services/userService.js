'use strict';
//app.factory('userInfoService',
//   function ($resource, baseServiceUrl) {
//       var userResource = $resource(
//            baseServiceUrl + '/user/profile'
//        );
//       return {
//           getUserInfo: function (params, success, error) {
//               return userInfoService.query(params, success, error);
//           }
//       }
//   }
//);
app.factory('userService',
    function ($http, baseServiceUrl, authService) {
        return {
            createNewAd: function (adData, success, error) {
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/user/ads',
                    headers: authService.getAuthHeaders(),
                    data: adData
                };
                $http(request).success(success).error(error);
            },

            getUserAds: function (params, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/user/ads',
                    headers: authService.getAuthHeaders(),
                    params: params
                };
                $http(request).success(success).error(error);
            },
            
            getUserProfile: function(params,success,error){
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/user/profile',
                    headers: authService.getAuthHeaders(),
                    params: params
                };
                $http(request).success(success).error(error);
            },
            
            changeUserPassword: function (userPass, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/user/changePassword',
                    data: userPass
                };
                $http(request).success(function (data) {
                   
                    success(data);
                }).error(error);
            },
            deactivateAd: function (id, success, error) {
                // TODO
            },

            publishAgainAd: function (id, success, error) {
                // TODO
            }

        }
    }
);
