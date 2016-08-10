'use strict';

(function(){

    angular.module('testApp')
        .service('taLightboxService', ['$q', '$http', taLightboxService]);

    function taLightboxService($q, $http){
        var service = this;
        var dataUrl = 'files/data.json';

        service.getFile = function(){
            var requestLightboxData = $q.defer();

            $http({
                method: 'GET',
                url: dataUrl
            }).then(function successCallback(response) {
                requestLightboxData.resolve(response.data);
            }, function errorCallback(response) {
                requestLightboxData.reject(response);
            });

            return requestLightboxData.promise;
        }
    };
}());