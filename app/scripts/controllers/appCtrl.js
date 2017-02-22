'use strict';

/**
 * @ngdoc function
 * @name cndeeApp.controller:appCtrl
 * @description
 * # appCtrl
 * Controller of the cndeeApp
 */
angular.module('cndeeApp')
  .controller('appCtrl', ['PreloadRegistery', '$q', function(PreloadRegistery, $q) {
      var vm   = this;
      vm.title = 'AppController';
      vm.side  = $mdSidenav;

      function activate () {
        vm.appReady = true;
        routerConfig();
      }       

      $q.all([
            someTable.loadDone,
            PreloadRegistery.loadDone
          ])
          .then(activate);
      return;   
  }]);