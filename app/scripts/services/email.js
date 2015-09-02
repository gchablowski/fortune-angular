'use strict';

angular.module('EmailServices', ['ngResource'])
        .factory('Email', ['myConfig', '$resource',
            function(myConfig, $resource) {
                return $resource(myConfig.backend+'/email/:action/:token', {}, {
                    save:{method:'POST', params:{action:'add'}},
                    activation:{method:'PUT', params:{action:'@action', token:'@token'}}
                });
            }]);

