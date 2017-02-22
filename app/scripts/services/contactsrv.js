'use strict';

/**
 * @ngdoc service
 * @name cndeeApp.ContactSrv
 * @description
 * # ContactSrv
 * Service in the cndeeApp.
 */
angular.module('cndeeApp')
	.service('ContactSrv', ['$http', function($http) {
		return {
			postContactInfo: function(nombre, mail, asunto, paginaOrigen, comentarios, estado, telefono) {
				return $http.post('http://farmaciasdesimilares.com.mx/WSAjax/MXFSWEBAJAXService.asmx/Contacto', "{'nombre':'" + nombre + "','mail':'" + mail + "','asunto':'" + asunto + "', 'paginaOrigen':'" + paginaOrigen + "','comentarios':'" + comentarios + "','estado':'" + estado + "', 'telefono':'" + telefono + "'}");
			}
		};
	}]);
