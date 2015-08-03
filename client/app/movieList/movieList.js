'use strict';

angular.module('favMoviesApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/movieList', {
        templateUrl: 'app/movieList/movieList.html',
        controller: 'MovieListCtrl'
      });
  });
