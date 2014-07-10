'use strict';

/**
 * @ngdoc overview
 * @name dockerMeetupFrontendApp
 * @description
 * # dockerMeetupFrontendApp
 *
 * Main module of the application.
 */
angular
  .module('dockerMeetupFrontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/base.html',
        controller: 'HomeBaseCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
