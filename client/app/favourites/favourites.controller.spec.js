'use strict';

describe('Controller: FavouritesCtrl', function () {

  // load the controller's module
  beforeEach(module('favMoviesApp'));

  var FavouritesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FavouritesCtrl = $controller('FavouritesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
