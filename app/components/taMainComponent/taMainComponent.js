'use strict';

(function(){
    angular.module('testApp')
        .component('taMainComponent', {
            templateUrl: 'components/taMainComponent/taMainComponent.html',
            controller: taMainComponent
        });

    function taMainComponent(){
        var ctrl = this;

        ctrl.title = 'Main Component';

    }
}());