'use strict';

describe('BuildsController', function () {
  var $scope;

  beforeEach(module('bikebuilderApp'));

  beforeEach(inject(function ($controller, $rootScope) {
    $scope = $rootScope.$new();
    $controller('BuildsController', {$scope: $scope});
  }));

  // it('', function () {
  //   expect().toBe();
  // });

});
