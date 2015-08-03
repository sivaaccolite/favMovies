'use strict';

angular.module('favMoviesApp')
  .controller('DetailsCtrl', ["$scope","movie", "$routeParams", "$location", function ($scope, movie, $routeParams, $location) {
    var model = {
    	imdbID : $routeParams.imdbID,
    	details : ["Rated","Runtime","Genre","Director","Writer","Actors","Plot","Language","Country","Awards","Metascore","imdbRating","imdbVotes"]
    };

    movie.getMovieDetails(model.imdbID).then(function(response){
    	model.movie = response.data;
    	if (!model.movie || model.movie.error) {
    		$location.path('/');
    	}
    })

    $scope.model = model;
  }]);
