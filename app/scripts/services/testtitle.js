'use strict';

/**
 * @ngdoc service
 * @name cndeeApp.testTitle
 * @description
 * # testTitle
 * Service in the cndeeApp.
 */
angular.module('cndeeApp')
    .service('testTitle', function() {
    	var titulo = '';
        var addTitle = function(txt) {
            titulo = txt;
        };

        var getTitle = function() {
            return titulo;
        };

        return {
            addTitle: addTitle,
            getTitle: getTitle
        };
    });
