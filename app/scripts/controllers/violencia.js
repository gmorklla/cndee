'use strict';

/**
 * @ngdoc function
 * @name cndeeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cndeeApp
 */
angular.module('cndeeApp')
  .controller('ViolenciaCtrl', ['loadData', '$scope', function (loadData, $scope) {

    if (screen.width <= 640) {
      $scope.cuantos = 1;
    } else {
      $scope.cuantos = 2;
    }

    var datos = loadData.httpReq('data/violencia.json');
    datos.then(function(datos) {
      $scope.violenciaContent = datos.data;
      console.log($scope.violenciaContent);
    }, function(e) {
      console.log(e);
    });

  }]);
