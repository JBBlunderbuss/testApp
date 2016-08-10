'use strict';

describe('component: taLightboxComponent', function () {
    var $componentController;

    beforeEach(module('testApp'));

    beforeEach(inject(function(_$componentController_) {
        $componentController = _$componentController_;
    }));

    it('taLightboxComponent should be defined', function () {
        var ctrl = $componentController('taLightbox');

        expect(ctrl).toBeDefined();
    });

});
