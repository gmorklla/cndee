'use strict';

/**
 * @ngdoc service
 * @name cndeeApp.angularSeo
 * @description: Define los títulos de las páginas de manera dinámica
 * # angularSeo
 * Service in the cndeeApp.
 */
angular.module('cndeeApp')
    .service('angularSeo',['$rootScope', '$stateParams', '_', 'prettyUrl', function($rootScope, $stateParams, _, prettyUrl) {
        this.onStateChange = function(toState, toParams) {
        	switch(toState.name){
        		case 'inicio':
        			$rootScope.pageTitulo = 'Inicio';
        		break;
        		case 'nosotros':
        			$rootScope.pageTitulo = 'Nosotros';
        		break;
        		case 'salud-emocional':
        			$rootScope.pageTitulo = 'Salud Emocional';
        		break;
        		case 'salud-emocional.articulo':
                case 'sexualidad.articulo':
                case 'pareja.articulo':
                case 'adicciones.articulo':
                case 'familia.articulo':
                case 'ninos.articulo':
                case 'violencia.articulo':
                case 'tercera-edad.articulo':
                    var source = prettyUrl.deconfig(toParams.articuloId);
                    var prettyTitle = source.charAt(0).toUpperCase() + source.substring(1).toLowerCase();
        			$rootScope.pageTitulo = prettyTitle + ' | Salud Emocional';
        		break;
                case 'test':
                    $rootScope.pageTitulo = 'Test';
                break;
                case 'test.cuestionario':
                    $rootScope.pageTitulo = 'Test';
                break;                              
        	}
        };

    }]);
