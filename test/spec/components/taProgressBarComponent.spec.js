'use strict';

describe('component: taProgressBarComponent', function () {
    var $componentController;

    beforeEach(module('testApp'));

    beforeEach(inject(function(_$componentController_) {
        $componentController = _$componentController_;
    }));

    it('taProgressBarComponent should be defined', function () {
        var ctrl = $componentController('taProgressBar');

        expect(ctrl).toBeDefined();
    });

});
