'use strict';

/**
 * @ngdoc function
 * @name karvinenApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the karvinenApp
 */
angular.module('karvinenApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
