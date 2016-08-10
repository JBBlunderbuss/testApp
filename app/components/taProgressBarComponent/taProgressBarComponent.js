'use strict';

(function(){
    angular.module('testApp')
        .component('taProgressBar', {
            templateUrl: 'components/taProgressBarComponent/taProgressBarTemplate.html',
            controller: taProgressBarComponent,
            bindings: {
                percent: '=',
                status: '='
            }
        });

    function taProgressBarComponent(){
        var ctrl = this;
    }
}());