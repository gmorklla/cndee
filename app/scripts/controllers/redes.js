'use strict';

/**
 * @ngdoc function
 * @name cndeeApp.controller:RedesCtrl
 * @description
 * # RedesCtrl
 * Controller of the cndeeApp
 */
angular.module('cndeeApp')
    .controller('RedesCtrl', ['$rootScope', function($rootScope) {

        $rootScope.yaEntro = false;

        $rootScope.getRedes = function() {
          $('.faceTwitter').fadeIn("slow");
        };

        $rootScope.hideRedes = function() {
          if($rootScope.yaEntro){
            $('.faceTwitter').fadeOut("slow");
            $rootScope.yaEntro = false;
          }
        };

        $rootScope.yaEntroF = function () {
          $rootScope.yaEntro = true;
        };      

    }]);
