'use strict';

/**
 * @ngdoc filter
 * @name cndeeApp.filter:dateFilter
 * @function
 * @description
 * # dateFilter
 * Filter in the cndeeApp.
 */
angular.module('cndeeApp')   
    .filter('dateFilter', function() {
        return function(fecha) {
            var d = new Date(fecha);
            var options = {
                weekday: "long",
                year: "numeric",
                month: "short",
                day: "numeric"
            };
            return d.toLocaleDateString("es-ES", options);
        };
    });    
