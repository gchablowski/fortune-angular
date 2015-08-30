'use strict';

describe('Controller: MainCtrl', function() {

    beforeEach(function() {
        jasmine.addMatchers({
            toEqualData: function() {
                return {
                    compare: function(actual, expected) {
                        return {
                            pass: angular.equals(actual, expected)
                        };
                    }
                };
            }
        });
    });

    // load the controller's module
    beforeEach(module('fortuneAngularApp'));
    beforeEach(module('QuotesServices'));

    var MainCtrl, scope, $httpBackend;

    // Initialize the controller and a mock scope
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('http://localhost/fortune/web/app_dev.php/quotes').
                respond([{"id": 0, "text": "Lorem", "author": "Lorem ipsum", "date": "today"},
                    {"id": 0, "text": "Lorem", "author": "Lorem ipsum", "date": "today"},
                    {"id": 0, "text": "Lorem", "author": "Lorem ipsum", "date": "today"}]);

        scope = $rootScope.$new();
        MainCtrl = $controller('MainCtrl', {$scope: scope});
    }));


    it('should create "quotes" model with 2 quotes fetched from xhr', function() {
        $httpBackend.flush();

        expect(scope.quotes).toEqualData([{"id": 0, "text": "Lorem", "author": "Lorem ipsum", "date": "today"},
            {"id": 0, "text": "Lorem", "author": "Lorem ipsum", "date": "today"},
            {"id": 0, "text": "Lorem", "author": "Lorem ipsum", "date": "today"}]);
    });

    it('0 is the current index', function() {
        var index = scope.currentIndex;

        expect(index).toEqual(0);
    });

    it('Verify if we can have the current index', function() {
        var number = scope.isCurrentQuoteIndex(0);

        expect(number).toEqual(true);

        number = scope.isCurrentQuoteIndex(1);

        expect(number).toEqual(false);
    });

    it('change the current index', function() {
        scope.setCurrentQuoteIndex(1);
        var index = scope.currentIndex;

        expect(index).toEqual(1);
    });


    it('change the current index with prevquote', function() {
        scope.setCurrentQuoteIndex(1);
        scope.prevQuote();
        var index = scope.currentIndex;

        expect(index).toEqual(0);
    });

    it('change the current index with nextquote', function() {
        scope.setCurrentQuoteIndex(1);
        scope.nextQuote();
        var index = scope.currentIndex;

        expect(index).toEqual(0);
    })
});

