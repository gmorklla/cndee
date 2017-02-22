'use strict';

/**
 * @ngdoc function
 * @name cndeeApp.controller:articulosCtrl
 * @description
 * # articulosCtrl
 * Controller of the cndeeApp
 */
angular.module('cndeeApp')
  .controller('articulosCtrl', ['loadData', '$scope', function (loadData, $scope) {
        var datos = loadData.httpReq('data/articulos.json');
        datos.then(function(datos) {
            $scope.articulos = datos.data;
        }, function(e) {
            console.log(e);
        });
  }]);
