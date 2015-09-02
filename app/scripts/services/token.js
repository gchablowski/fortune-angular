'use strict';

angular.module('TokenServices', ['ngResource'])
        .factory('Token', ['$resource',
            function($resource) {
                return $resource('http://localhost/fortune/web/app_dev.php/oauth/v2/token',
                        {client_id: "@client_id",
                            client_secret: "@client_secret",
                            grant_type: "client_credentials"
                        }, {
                });
            }]);
