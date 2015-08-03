'use strict';

angular.module('favMoviesApp')
  .controller('MovieListCtrl', ['$scope', 'movie', function ($scope, movie) {

    var model = {
        movieCountToShow : 10,
        movieList : [],
        distinctCounts : [5,10,25,50,100,200,500],
        distinctCountries : ["Algeria","Argentina","Australia","Austria","Brazil","Bulgaria","Canada","China","Czech Republic","Denmark","France","Germany","Hong Kong","Hungary","India","Iran","Ireland","Italy","Japan","Mexico","New Zealand","Poland","Serbia","South Africa","South Korea","Soviet Union","Spain","Sweden","Switzerland","UK","United Arab Emirates","USA","West Germany"]
    };

    $scope.model = model;

    movie.getMovieList().then(function(response){
    	model.movieList = response.data;
		alignHeights();
    });

    $scope.$watch('[model.movieCountToShow,model.countryToShow]', function(){
        alignHeights();
    })

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
            model.movieList[currentIndex].favourite = response.data && 
                (currentMovie.imdbID === response.data.imdbID) && response.data.favourite;
        })
    };

  }]);
