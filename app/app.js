/**
 * Created by shraddha on 8/12/14.
 */
'use strict';

angular.module('contactApp', ['ngAnimate',
  'ngResource',
  'ngRoute']).config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/main.html',
        controller: 'MainController'
      })
      .when('/contact', {
        templateUrl: 'templates/contact.html',
        controller: 'ContactController'
      })
      .otherwise({
        templateUrl: 'templates/404.html'
      });
   $locationProvider.html5Mode(true);
  });