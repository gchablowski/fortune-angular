'use strict';

angular.module('fortuneAngularApp')
        .factory('Quotes', ['$resource',
  function($resource){
    return $resource('http://localhost/fortune/web/app_dev.php/quotes', {}, {
    });
  }]);

