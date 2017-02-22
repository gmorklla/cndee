'use strict';

/**
 * @ngdoc service
 * @name cndeeApp.getnextprev
 * @description
 * # getnextprev
 * Service in the cndeeApp.
 */
angular.module('cndeeApp')
    .service('getnextprev', ['_', '$rootScope', function(_, $rootScope) {
        return {
            nextPrev: function(datos, view) {

                var notaActual = _.findWhere(datos.data, {
                    url: view
                });

                $rootScope.tituloNotaActual = notaActual.titulo;

                var size = _.size(datos.data);
                var indice = _.indexOf(datos.data, notaActual) + 1;
                var siguiente;
                var anterior;

                if (indice === size) {
                    siguiente = 0;
                    anterior = _.indexOf(datos.data, notaActual) - 1;
                } else if (indice === 1) {
                    siguiente = _.indexOf(datos.data, notaActual) + 1;
                    anterior = size - 1;
                } else {
                    siguiente = _.indexOf(datos.data, notaActual) + 1;
                    anterior = _.indexOf(datos.data, notaActual) - 1;
                }

                var notaNext = datos.data[siguiente];

                var notaPrev = datos.data[anterior];

                var notas = [notaPrev, notaNext];

                return notas;
            }
        };
    }]);
