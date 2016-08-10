'use strict';

describe('component: taMainComponent', function () {
    var $componentController;

    beforeEach(module('testApp'));

    beforeEach(inject(function(_$componentController_) {
        $componentController = _$componentController_;
    }));

    it('taMainComponent should be defined', function () {
        var ctrl = $componentController('taMainComponent');

        expect(ctrl).toBeDefined();
    });

    it('taMainComponent should have a title', function () {
        var ctrl = $componentController('taMainComponent');

        expect(ctrl.title).toBeDefined();
    });
});
