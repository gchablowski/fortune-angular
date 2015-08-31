'use strict';

angular.module('EmailServices', ['ngResource'])
        .factory('Email', ['$resource',
            function($resource) {
                return $resource('http://localhost/fortune/web/app_dev.php/email/:action/:token', {}, {
                    save:{method:'POST', params:{action:'add'}},
                    activation:{method:'PUT', params:{action:'@action', token:'@token'}}
                });
            }]);

