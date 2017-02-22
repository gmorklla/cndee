'use strict';

/**
 * @ngdoc function
 * @name cndeeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cndeeApp
 */
angular.module('cndeeApp')
	.controller('AboutCtrl', ['$scope', function($scope) {
		$scope.modalContent = {
			"articulos": [{
				"titulo": "Visión",
				"contenido": "Ser un organismo líder en el área de asesoría y orientación psicológica, especializada en la atención, detección y acompañamiento terapéutico, que lleve a nuestra población a encontrar el camino adecuado para su desarrollo emocional."
			},
			{
				"titulo": "Misión",
				"contenido": "Atender, orientar y guiar a la población en materia de psicología y referencia sobre las instituciones que ofrecen el tratamiento adecuado que pueda desarrollar y potenciar las habilidades y capacidades que lleven hacia el crecimiento emocional e integral."				
			},
			{
				"titulo": "Objetivos",
				"contenido": "Realizar una valoración oportuna sobre los padecimientos emocionales de la persona interesada. Brindar asesoría, orientación y referencia a diversas instituciones que ofrecen el tratamiento adecuado (a nivel nacional), cerca de tu localidad y de acuerdo a tu presupuesto."					
			}]
		};
		$scope.getModalContent = function(n) {
			switch (n) {
				case 1:
					$scope.titulo = $scope.modalContent.articulos[0].titulo;
					$scope.contenido = $scope.modalContent.articulos[0].contenido;
				break;
				case 2:
					$scope.titulo = $scope.modalContent.articulos[1].titulo;
					$scope.contenido = $scope.modalContent.articulos[1].contenido;
				break;
				case 3:
					$scope.titulo = $scope.modalContent.articulos[2].titulo;
					$scope.contenido = $scope.modalContent.articulos[2].contenido;
				break;								
			}
			$('#vision').modal();
		};
	}]);