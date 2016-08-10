'use strict';

(function(){
    angular.module('testApp')
        .component('taLightbox', {
            templateUrl: 'components/taLightboxComponent/taLightboxTemplate.html',
            controller: ['$interval', '$timeout', 'taLightboxService', taLightboxComponent],
            bindings: {
                close: '='
            }
        });

    function taLightboxComponent($interval, $timeout, taLightboxService){
        var ctrl = this;
        ctrl.duration = 0;
        ctrl.status = 'init';
        ctrl.percent = 0;
        ctrl.timer;
        ctrl.start;

        ctrl.reset = reset;
        ctrl.starTimer = starTimer;

        ctrl.reset();

        function percentOfDuration(start, duration) {
            return (Date.now() - start) / duration * 100;

        }

        function starTimer(){
            ctrl.start = Date.now();
            ctrl.end = ctrl.start + ctrl.duration;
            ctrl.status = 'inProgress';

            ctrl.active = false;
            ctrl.timer = $interval(function(){
                ctrl.percent = percentOfDuration( ctrl.start, ctrl.duration );

                if(ctrl.end < Date.now()) {
                    $interval.cancel(ctrl.timer);
                    ctrl.status = 'done';
                }
            }, 10);
        }


        function reset(){
            ctrl.status = 'init';

            taLightboxService.getFile().then(function(response){
                ctrl.percent = 0;
                ctrl.duration = response.data.lightbox.duration;
                ctrl.active = true;
                ctrl.starTimer();
            });
        }


    }
}());