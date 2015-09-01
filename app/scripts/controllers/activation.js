'use strict';

/**
 * @ngdoc function
 * @name fortuneAngularApp.controller:AboutCtrl
 * @description
 * # RegisterCtrl
 * Controller of the fortuneAngularApp
 */
angular.module('fortuneAngularApp')
        .controller('ActivationCtrl', ['$scope', 'Email', '$routeParams', '$location', function($scope, Email, $routeParams, $location) {
                $scope.valid = {};
                $scope.error = {};
                
                if ($routeParams.action === "activate" || $routeParams.action === "desactivate") {
                    $scope.email = Email.activation({action: $routeParams.action, token: $routeParams.token}).$promise.then(
                            function(data) {
                                $scope.valid = data.message;
                            },
                            function(error) {
                                $scope.error = error.data.message;
                            }
                    );
                }else {
                    $location.path('/').replace();
                }

                $scope.isEmptyObject = function(item) {
                    return angular.equals({}, item);
                };

            }]);
