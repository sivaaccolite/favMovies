'use strict';

angular.module('favMoviesApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/movieList'
    },{
      'title': 'Favourites',
      'link': '/favourites'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });