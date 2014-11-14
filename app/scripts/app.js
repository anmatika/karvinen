'use strict';

/**
 * @ngdoc overview
 * @name karvinenApp
 * @description
 * # karvinenApp
 *
 * Main module of the application.
 */
angular
  .module('karvinenApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/ryhmat', {
        templateUrl: 'views/ryhmat.html',
        controller: 'GroupsCtrl'
      })
      .when('/yhteystiedot', {
        templateUrl: 'views/yhteystiedot.html'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
