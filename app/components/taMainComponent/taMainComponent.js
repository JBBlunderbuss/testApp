'use strict';

(function(){
    angular.module('testApp')
        .component('taMainComponent', {
            templateUrl: 'components/taMainComponent/taMainTemplate.html',
            controller: taMainComponent
        });

    function taMainComponent(){
        var ctrl = this;

        ctrl.title = 'Main Component';
        ctrl.showLightbox = true;

        ctrl.close = close;
        ctrl.open = open;

        function close(){
            console.log('close');
            ctrl.showLightbox = false;
        }

        function open(){
            ctrl.showLightbox = true;
        }

    }
}());