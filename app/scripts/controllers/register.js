'use strict';

/**
 * @ngdoc function
 * @name fortuneAngularApp.controller:AboutCtrl
 * @description
 * # RegisterCtrl
 * Controller of the fortuneAngularApp
 */
angular.module('fortuneAngularApp')
        .controller('RegisterCtrl', ['$scope', function($scope) {
                $scope.myForm = {};
                $scope.email = {
                    fortunebundle_email:{
                        email:""
                    }
                };

                $scope.submit = function() {
                    console.log("--> Submitting form");
                    
                    console.log($scope.email);

                    /*
                     var responsePromise = $http.post("/angularjs-examples/json-test-data.jsp", dataObject, {});
                     responsePromise.success(function(dataFromServer, status, headers, config) {
                     console.log(dataFromServer.title);
                     });
                     responsePromise.error(function(data, status, headers, config) {
                     alert("Submitting form failed!");
                     });*/
                };
            }]);
