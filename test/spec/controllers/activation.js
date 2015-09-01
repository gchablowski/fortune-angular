'use strict';

describe('Controller: ActivationCtrl', function() {

// load the controller's module
    beforeEach(module('fortuneAngularApp'));
    beforeEach(module('EmailServices'));

    var ActivationCtrl, scope, $httpBackend, routeParams;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope, $routeParams) {
        scope = $rootScope.$new();
        routeParams = $routeParams;
        ActivationCtrl = $controller('ActivationCtrl', {
            $scope: scope,
            routeParams: routeParams
        });
    }));
    
    it('should attach a list of variable to the scope', function() {

        expect(scope.error).toEqual({});
        expect(scope.valid).toEqual({});

    });
    
    describe('activate', function() {
        beforeEach(inject(function($controller, $rootScope, _$httpBackend_, $routeParams) {
            $httpBackend = _$httpBackend_;
            scope = $rootScope.$new();
            routeParams = $routeParams;
            routeParams.action = 'activate';
            routeParams.token = 'aaaaa';
            ActivationCtrl = $controller('ActivationCtrl', {
                $scope: scope,
                routeParams: routeParams
            });

        }));

        it('activate an email', function() {
            $httpBackend.expect('PUT', 'http://localhost/fortune/web/app_dev.php/email/activate/aaaaa').
                    respond(200, {"code": 200, "message": "bob234@gmail.com have been activated", "errors": null});

            $httpBackend.flush();
            expect(scope.valid).toBe("bob234@gmail.com have been activated");
        });
        
        it('activate an email error', function() {
            $httpBackend.expect('PUT', 'http://localhost/fortune/web/app_dev.php/email/activate/aaaaa').
                    respond(404, {"code":404,"message":"Unable to find your email.","errors":null});

            $httpBackend.flush();
            expect(scope.error).toBe("Unable to find your email.");
        });
    });

   describe('desactivate', function() {
        beforeEach(inject(function($controller, $rootScope, _$httpBackend_, $routeParams) {
            $httpBackend = _$httpBackend_;
            scope = $rootScope.$new();
            routeParams = $routeParams;
            routeParams.action = 'desactivate';
            routeParams.token = 'aaaaa';
            ActivationCtrl = $controller('ActivationCtrl', {
                $scope: scope,
                routeParams: routeParams
            });

        }));

        it('desactivate an email', function() {
            $httpBackend.expect('PUT', 'http://localhost/fortune/web/app_dev.php/email/desactivate/aaaaa').
                    respond(200, {"code": 200, "message": "bob234@gmail.com have been activated", "errors": null});

            $httpBackend.flush();
            expect(scope.valid).toBe("bob234@gmail.com have been activated");
        });
        
         it('desactivate an email error', function() {
            $httpBackend.expect('PUT', 'http://localhost/fortune/web/app_dev.php/email/desactivate/aaaaa').
                    respond(404, {"code":404,"message":"Unable to find your email.","errors":null});

            $httpBackend.flush();
            expect(scope.error).toBe("Unable to find your email.");
        });
        
    });

    describe('isEmptyObject', function() {

        it('verify if an object is empty', function() {
            var empty = scope.isEmptyObject({});
            expect(empty).toBe(true);

            empty = scope.isEmptyObject({0: "lorem"});
            expect(empty).toBe(false);
        });
    });
});
