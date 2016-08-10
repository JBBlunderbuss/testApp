"use strict";

describe("service : LightboxService ", function () {
    var lightboxService, httpBackend;

    beforeEach(module("testApp"));

    beforeEach(inject(function (_taLightboxService_, $httpBackend) {
        lightboxService = _taLightboxService_;
        httpBackend = $httpBackend;
    }));

    it("The speed of the animation should be retrieved from data.json", function () {
        httpBackend.whenGET("files/data.json").respond({
            "total": 2,
            "data": {
                "lightbox": {
                    "start": 0,
                    "finish": 100,
                    "duration": 2500
                }
            }
        });
        lightboxService.getFile().then(function(response) {
            expect(response.data.lightbox.duration).toEqual(2500);
        });
        httpBackend.flush();
    });

});