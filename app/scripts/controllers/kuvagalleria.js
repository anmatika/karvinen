'use strict';

/**
 * @ngdoc function
 * @name karvinenApp.controller:KuvagalleriaCtrl
 * @description
 * # KuvagalleriaCtrl
 * Controller of the karvinenApp
 */
 angular.module('karvinenApp').controller('KuvagalleriaCtrl', function ($scope) {
   $scope.myInterval = 5000;
   var slides = $scope.slides1 = [
	{
		image: '/images/galleria/1/1.jpg'
	},
	{
		image: '/images/galleria/1/1.jpg'
	},
	{
		image: '/images/galleria/1/3.jpg'
	},
	{
		image: '/images/galleria/1/4.jpg'
	},
	{
		image: '/images/galleria/1/5.jpg'
	},
	{
		image: '/images/galleria/1/6.jpg'
	},
   ];
   
    $scope.slides2 = [
	{
		image: '/images/galleria/2/2.jpg'
	},
	{
		image: '/images/galleria/2/3.jpg'
	},
	{
		image: '/images/galleria/2/4.jpg'
	}	
   ];
   
 });