'use strict';

angular.module('QuotesServices', ['ngResource'])
        .factory('Quotes', ['myConfig', '$resource',
            function(myConfig, $resource) {
                return $resource(myConfig.backend+'/quotes', {}, {
                });
            }]);

