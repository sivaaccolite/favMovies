'use strict';

angular.module('favMoviesApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/movieList'
      });

    $locationProvider.html5Mode(true);
  });
