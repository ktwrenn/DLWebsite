'use strict';

/**
 * @ngdoc function
 * @name dlwebsiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dlwebsiteApp
 */
angular.module('dlwebsiteApp')
  .controller('MainCtrl', function ($scope) {
  
    $scope.tabs = [
      {name: 'Home', href: '#/'},
      {name: 'About', href: '#/about'},
      {name: 'New Memeber Info', href: '#/newmember'},
      {name: 'Drum With Us', href: '#/drum'},
      {name: 'Calendar', href: '#/calendar'},
      {name: 'Media', href: '#/media'},
      {name: 'Contact', href: '#/contact'}
    ];
  });
