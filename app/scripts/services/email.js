'use strict';

angular.module('EmailServices', ['ngResource'])
        .factory('Email', ['$resource',
            function($resource) {
                return $resource('http://localhost/fortune/web/app_dev.php/email/:verb', {}, {
                    save:{method:'POST', params:{verb:"add"}}
                });
            }]);

