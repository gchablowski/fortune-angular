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
            'EmailServices',
            'TokenServices',
            'TokenInjectorServices',
            'LoaderDirective',
            'SpinnerServices'
        ])
        .constant('myConfig', {
            backend: 'XXX',
            client_id: "XXX",
            client_secret: "XXX"
        })
        .config(function($routeProvider, $httpProvider) {
            $httpProvider.interceptors.push('tokenInjector');
            $httpProvider.interceptors.push('SpinnerInjector');
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
        });
