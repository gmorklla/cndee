'use strict';

/**
 * @ngdoc function
 * @name cndeeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cndeeApp
 */
angular.module('cndeeApp')
  .controller('SaludCtrl', ['loadData', '$scope', function(loadData, $scope) {

    if (screen.width <= 640) {
      $scope.cuantos = 1;
    } else {
      $scope.cuantos = 2;
    }

    var datos = loadData.httpReq('data/salud.json');
    datos.then(function(datos) {
      $scope.saludContent = datos.data;
    }, function(e) {
      console.log(e);
    });

  }]);