'use strict';

/**
 * @ngdoc function
 * @name fortuneAngularApp.controller:AboutCtrl
 * @description
 * # RegisterCtrl
 * Controller of the fortuneAngularApp
 */
angular.module('fortuneAngularApp')
        .controller('RegisterCtrl', ['$scope', 'Email', function($scope, Email) {
                $scope.myForm = {};
                $scope.error = {};
                $scope.valid = {};
                $scope.email = {
                    fortunebundle_email: {
                        email: ""
                    }
                };

                $scope.submit = function() {

                    $scope.error = Email.save($scope.email).$promise.then(
                            function(data) {
                                data = angular.fromJson(data);
                                $scope.valid = data.message;
                            },
                            function(error) {
                                var emessage = angular.fromJson(error);
                                $scope.error = emessage.data.errors.children.email.errors[0];
                            }
                    );

                };

                $scope.isEmptyObject = function(item) {
                    return angular.equals({}, item);
                };

            }]);
