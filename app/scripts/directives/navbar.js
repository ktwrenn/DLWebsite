'use strict';

(function() {
  var app = angular.module('dlwebsiteApp');
  
  app.directive('navbarDirective', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/partials/navbar.html'
    };
  });
})();