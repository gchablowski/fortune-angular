'use strict';
angular.module('fortuneAngularApp')
        .factory('tokenInjector', ['$injector', '$rootScope', '$q', function($injector, $rootScope, $q) {
                return {
                    // optional method
                    'request': function(config) {
                        config.params = config.params || {};

                        if ($rootScope.oauth) {
                            config.params.access_token = $rootScope.oauth;

                        }
                        return config;
                    },
                    'responseError': function(rejection) {

                        if (rejection.status === 401) {

                            // Get a new token...
                            var $http = $injector.get('$http');
                            var Token = $injector.get('Token');
                            var deferred = $q.defer();

                            Token.get({client_id: "32_5lgzzbbr5yos4w8kkks804so8ow0s4s00gcwokcgcskock8s4s",
                            client_secret: "1zuigxpohepwoc404wc84gs8kgs08o0wwos4c8gscws0cwsoks"},
                            function(data) {
                                $rootScope.oauth = data.access_token;
                            }).$promise.then(deferred.resolve, deferred.reject);

                            return deferred.promise.then(function() {
                                return $http(rejection.config);
                            });

                        }
                        return $q.reject(rejection);
                    }
                };
            }]);

