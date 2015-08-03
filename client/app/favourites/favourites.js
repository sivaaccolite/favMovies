'use strict';

angular.module('favMoviesApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/favourites', {
        templateUrl: 'app/favourites/favourites.html',
        controller: 'FavouritesCtrl'
      });
  });
