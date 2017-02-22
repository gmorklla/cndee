'use strict';

/**
 * @ngdoc function
 * @name cndeeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cndeeApp
 */
angular.module('cndeeApp')
  .controller('NinosCtrl', ['loadData', '$scope', function (loadData, $scope) {

    if (screen.width <= 640) {
      $scope.cuantos = 1;
    } else {
      $scope.cuantos = 2;
    }

    var datos = loadData.httpReq('data/ninos.json');
    datos.then(function(datos) {
      $scope.ninosContent = datos.data;
      console.log($scope.ninosContent);
    }, function(e) {
      console.log(e);
    });

  }]);
