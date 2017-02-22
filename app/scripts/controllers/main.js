'use strict';

/**
 * @ngdoc function
 * @name cndeeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cndeeApp
 */
angular.module('cndeeApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
  	$scope.getModalContent = function() {
  		$('#consejos').modal();
  	};
  }]);
