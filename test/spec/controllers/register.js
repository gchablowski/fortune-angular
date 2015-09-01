'use strict';

describe('Controller: RegisterCtrl', function() {

// load the controller's module
    beforeEach(module('fortuneAngularApp'));
    beforeEach(module('EmailServices'));
    var RegisterCtrl, scope, $httpBackend;
    
    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope, _$httpBackend_) {
        $httpBackend = _$httpBackend_;
        scope = $rootScope.$new();
        RegisterCtrl = $controller('RegisterCtrl', {
            $scope: scope
                    // place here mocked dependencies
        });
    }));
    it('should attach a list of variable to the scope', function() {
        expect(scope.myForm).toEqual({});
        expect(scope.error).toEqual({});
        expect(scope.valid).toEqual({});
        expect(scope.email).toEqual({
            fortunebundle_email: {
                email: ""
            }
        });
    });

    describe('submit', function() {

        it('add an email', function() {
            $httpBackend.expect('POST', 'http://localhost/fortune/web/app_dev.php/email/add').
                    respond(200, {"code": 200, "message": "Your email have been saved. To proceed your registration a validation mail have been send to you.", "errors": null});

            scope.submit();
            $httpBackend.flush();

            expect(scope.valid).toBe('Your email have been saved. To proceed your registration a validation mail have been send to you.');
        });

        it('error when add an email', function() {
            $httpBackend.expect('POST', 'http://localhost/fortune/web/app_dev.php/email/add').
                    respond(400, {"code": 400, "message": "Validation Failed", "errors": {"children": {"email": {"errors": ["This value is not a valid email address."]}}}});

            scope.submit();
            $httpBackend.flush();

            expect(scope.error).toBe("This value is not a valid email address.");
        });
    });

    describe('isEmptyObject', function() {

        it('verify if an object is empty', function() {
            var empty = scope.isEmptyObject({});
            expect(empty).toBe(true);
            
            empty = scope.isEmptyObject({0:"lorem"});
            expect(empty).toBe(false);
        });
    });
});
