'use strict';

/** 
 * @ngdoc function
 * @name karvinenApp.controller:KuvagalleriaCtrl
 * @description
 * # KuvagalleriaCtrl
 * Controller of the karvinenApp
 */
 angular.module('karvinenApp')
 .controller('KuvagalleriaCtrl', function ($scope, $http) {
   		  
    function prepareSlides() {  

	   $scope.myInterval = 5000;

	    $http.get('images/galleria/1.json').
	    success(function(data, status, headers, config) {
	      $scope.slides1 = data;
	    }).
	    error(function(data, status, headers, config) {
	      // log error
	    });

	    $http.get('images/galleria/2.json').
	    success(function(data, status, headers, config) {
	      $scope.slides2 = data;
	    }).
	    error(function(data, status, headers, config) {
	      // log error
	    });
   }
   
   prepareSlides();

   return {
   		prepareSlides: prepareSlides
   	};
     
 });