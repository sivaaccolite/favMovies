'use strict';

describe('Controller: MovieListCtrl', function () {

  // load the controller's module
  beforeEach(module('favMoviesApp'));

  var MovieListCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MovieListCtrl = $controller('MovieListCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
