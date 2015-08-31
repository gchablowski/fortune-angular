'use strict';

/**
 * @ngdoc overview
 * @name fortuneAngularApp
 * @description
 * # fortuneAngularApp
 *
 * Main module of the application.
 */
angular
        .module('fortuneAngularApp', [
            'ngAnimate',
            'ngCookies',
            'ngResource',
            'ngRoute',
            'ngSanitize',
            'ngTouch',
            'QuotesServices',
            'EmailServices'
        ])
        .config(function($routeProvider) {
            $routeProvider
                    .when('/', {
                        templateUrl: 'views/main.html',
                        controller: 'MainCtrl',
                        controllerAs: 'main'
                    })
                    .when('/email/register', {
                        templateUrl: 'views/register.html',
                        controller: 'RegisterCtrl',
                        controllerAs: 'register'
                    })
                    .when('/email/:action/:token', {
                        templateUrl: 'views/activation.html',
                        controller: 'ActivationCtrl',
                        controllerAs: 'activation'
                    })
                    .otherwise({
                        redirectTo: '/'
                    });
        }).run(function($rootScope, $location) {
    $rootScope.location = $location;
});
