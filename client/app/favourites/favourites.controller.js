'use strict';

angular.module('favMoviesApp')
  .controller('FavouritesCtrl', ['$scope', 'movie', function ($scope, movie) {

    var model = {
        movieList : [],
    };

    $scope.model = model;

    movie.getFavouriteMovies().then(function(response){
    	model.movieList = response.data;
		alignHeights();
    });

    //Hack to ensure the thumbnails are all in proper row
    function alignHeights() {
        setTimeout(function(){
        	var row=$('.portfolio');
    		$.each(row, function() {
    		    var maxh=0;
    		    $.each($(this).find('div[class^="col-"]'), function() {
    		        if($(this).height() > maxh)
    		            maxh=$(this).height();
    		    });
    		    $.each($(this).find('div[class^="col-"]'), function() {
    		        $(this).height(maxh);
    		    });
    		});
        }, 200);
    }

    $scope.toggleFavourite = function(currentMovie) {
        movie.toggleFavourite(currentMovie).then(function(response){
            var currentIndex = _.findIndex(model.movieList, { imdbID : currentMovie.imdbID})
            if (typeof currentIndex !== 'number') return;
            var favouriteFlag = response.data && 
                (currentMovie.imdbID === response.data.imdbID) && response.data.favourite;
        	model.movieList[currentIndex] = favouriteFlag;
            if (!favouriteFlag) {
            	model.movieList.splice(currentIndex,1);
            	alignHeights();
            }
        });
    };

  }]);
