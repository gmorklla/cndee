'use strict';

/**
 * @ngdoc service
 * @name cndeeApp.loadData
 * @description
 * # loadData
 * Service in the cndeeApp.
 */
angular.module('cndeeApp')
  .service('loadData', ['$http', function ($http) {

    return {
      httpReq: function(url) {
         return $http.get(url);
      }
    };

  }]);