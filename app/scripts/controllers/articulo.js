'use strict';

/**
 * @ngdoc function
 * @name cndeeApp.controller:articulosCtrl
 * @description
 * # articulosCtrl
 * Controller of the cndeeApp
 */
angular.module('cndeeApp')
    .controller('ArticuloCtrl', ['loadData', 'getnextprev', '$stateParams', '$state', '$scope', '$rootScope', '$log', function(loadData, getnextprev, $stateParams, $state, $scope, $rootScope, $log) {
        
		$('[data-toggle="tooltip"]').tooltip({html: 'true', container: 'body'});
        $scope.view = $stateParams.articuloId;

        var state = $state.$current.name;
        var seccion;

        function cargaData(args) {
            var datos = loadData.httpReq('data/' + args + '.json');
            datos.then(function(datos) {

                $scope.noticias = getnextprev.nextPrev(datos, $scope.view);
                $rootScope.toolPrev = $scope.noticias[0].titulo;
                $rootScope.toolNext = $scope.noticias[1].titulo;

            }, function(e) {
                $log.error(e);
            });
        }        

        switch (state) {
            case 'articulo':
                cargaData('articulos');
                seccion = 'articulo';
                break;
            case 'salud-emocional.articulo':
                cargaData('salud');
                seccion = 'salud-emocional.articulo';
                break;
            case 'sexualidad.articulo':
                cargaData('sexualidad');
                seccion = 'sexualidad.articulo';
                break;
            case 'pareja.articulo':
                cargaData('pareja');
                seccion = 'pareja.articulo';
                break;
            case 'adicciones.articulo':
                cargaData('adicciones');
                seccion = 'adicciones.articulo';
                break;
            case 'familia.articulo':
                cargaData('familia');
                seccion = 'familia.articulo';
                break;
            case 'ninos.articulo':
                cargaData('ninos');
                seccion = 'ninos.articulo';
                break;
            case 'violencia.articulo':
                cargaData('violencia');
                seccion = 'violencia.articulo';
                break;
            case 'tercera-edad.articulo':
                cargaData('tercera');
                seccion = 'tercera-edad.articulo';
                break;
        }

        $rootScope.otraNota = function(nota) {

            if (nota === 'prev') {
            	var prev = $scope.noticias[0].url;
            	
                $state.go(seccion, {
                    articuloId: prev
                });
            } else {
            	var next = $scope.noticias[1].url;
            	
                $state.go(seccion, {
                    articuloId: next
                });
            }
        };        

    }]);
