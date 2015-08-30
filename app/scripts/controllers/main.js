'use strict';

/**
 * @ngdoc function
 * @name fortuneAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fortuneAngularApp
 */
angular.module('fortuneAngularApp')
        .controller('MainCtrl', ['$scope', 'Quotes', function($scope, Quotes) {
                $scope.quotes = Quotes.query().$promise.then(function(quotes) {
                    quotes[0].date = "Today";
                    $scope.quotes = quotes;
                });

                $scope.currentIndex = 0;


                $scope.setCurrentQuoteIndex = function(index) {
                    $scope.currentIndex = index;
                };

                $scope.isCurrentQuoteIndex = function(index) {
                    return $scope.currentIndex === index;
                };

                $scope.prevQuote = function() {
                    $scope.currentIndex = ($scope.currentIndex < $scope.quotes.length - 1) ? ++$scope.currentIndex : 0;
                };

                $scope.nextQuote = function() {
                    $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.quotes.length - 1; 
                };
            }]);


