'use strict';

angular.module('favMoviesApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/details/:imdbID', {
        templateUrl: 'app/details/details.html',
        controller: 'DetailsCtrl'
      });
  });
