'use strict';

(function(){
    angular.module('testApp')
        .component('taLightbox', {
            templateUrl: 'components/taLightboxComponent/taLightboxTemplate.html',
            controller: taLightboxComponent,
            bindings: {}
        });

    function taLightboxComponent(){
        var ctrl = this;
    }
}());