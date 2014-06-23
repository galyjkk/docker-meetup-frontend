'use strict';

/**
 * @ngdoc function
 * @name dockerMeetupFrontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dockerMeetupFrontendApp
 */
angular.module('dockerMeetupFrontendApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
