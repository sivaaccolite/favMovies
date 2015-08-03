'use strict';

angular.module('favMoviesApp')
  .service('movie', ['$http', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getMovieList = function() {
    	return $http.get('api/movies');
    };

    this.getMovieDetails = function(imdbID) {
    	return $http.get('api/movies/imdb/'+imdbID);
    };

    this.toggleFavourite = function(currentMovie) {
    	return $http.post('api/movies/favourite/imdb', { imdbID : currentMovie.imdbID });	
    };

    this.getFavouriteMovies = function() {
    	return $http.get('api/movies/favourite');
    };    
  }]);
