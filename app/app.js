'use strict';

(function(){
    angular.module('testApp', [])
        .config(['$compileProvider', function ($compileProvider) {
            $compileProvider.debugInfoEnabled(false);
        }]);
}());