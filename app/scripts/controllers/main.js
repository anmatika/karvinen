'use strict';

/**
 * @ngdoc function
 * @name karvinenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the karvinenApp
 */
angular.module('karvinenApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
