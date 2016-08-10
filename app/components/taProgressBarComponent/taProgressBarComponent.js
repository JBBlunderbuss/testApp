'use strict';

(function(){
    angular.module('testApp')
        .component('taProgressBar', {
            templateUrl: 'components/taProgressBarComponent/taProgressBarTemplate.html',
            controller: taProgressBarComponent,
            bindings: {}
        });

    function taProgressBarComponent(){
        var ctrl = this;
    }
}());