'use strict';

/**
 * @ngdoc function
 * @name cndeeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cndeeApp
 */
angular.module('cndeeApp')
    .controller('ContactCtrl', ['ContactSrv', '$scope', '$log', function(ContactSrv, $scope, $log) {
        $scope.enviado = 0;

        $scope.postContactInfo = function() {

            console.clear();

            var forma = {
                'Usuario': $scope.username,
                'Email': $scope.email,
                'Mensaje': $scope.mensaje,
                'Estado': $scope.estado,
                'Telefono': $scope.tel
            };

            $log.info(forma);

            var datos = ContactSrv.postContactInfo($scope.username, $scope.email, 'Forma de contacto web', 'CNDEE', $scope.mensaje, $scope.estado, $scope.tel);

            datos.then(function(info) {
                $log.info(info);

            }, function(e) {
                $log.error(e);
            });

            $scope.enviado = 1;

        };
    }]);
