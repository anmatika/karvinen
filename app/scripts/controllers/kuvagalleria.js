'use strict';
/**
* @ngdoc function
* @name karvinenApp.controller:KuvagalleriaCtrl
* @description
* # KuvagalleriaCtrl
* Controller of the karvinenApp
*/
// angular.module('karvinenApp')
// .controller('KuvagalleriaCtrl', function ($scope) {


angular.module('karvinenApp').
controller('KuvagalleriaCtrl', function ($scope) {

 	var IMAGE_WIDTH = 405;
	$scope.IMAGE_LOCATION = "../images/";
    $scope.test = "Testi";
    // Retrieve and set data 
    //DataSource.get("images.json",function(data) {
        $scope.galleryData = [
	    {
	        "title":"Altair",
	        "id":"ED02-0185-01",
	        "desc":"General Atomics Aeronautical Systems, Inc., is developing the Altair version of its Predator B unmanned reconnaissance aircraft, shown here, under NASA's Environmental Research Aircraft and Sensor Technology (ERAST) project. NASA plans to use the Altair as a technology demonstrator testbed aircraft to validate a variety of command and control technologies for unmanned aerial vehicles (UAV), as well as demonstrate the capability to perform a variety of Earth science missions.",
	        "image":"carousel_1.png"
	    },
	    {
	        "title":"Altair",
	        "id":"ED03-0078-1",
	        "desc":"The Altair unmanned aerial vehicle (UAV), built by General Atomics Aeronautical Systems, Inc. for NASA, is poised for flight at GA-ASI's flight test facility at El Mirage, California. The Altair is a modified civil version of the QM-9 Predator B UAV developed by GA-ASI for the U.S. Air Force.",
	        "image":"carousel_2.png"
	    },
	    
		];
        $scope.selected = $scope.galleryData[0];
    //});
    
  //   // Scroll to appropriate position based on image index and width
    $scope.scrollTo = function(image,ind) {
        $scope.listposition = {left:(IMAGE_WIDTH * ind * -1) + "px"};
        $scope.selected = image;
    };
});