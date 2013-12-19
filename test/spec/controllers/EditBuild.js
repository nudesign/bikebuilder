'use strict';

describe('Controller: EditbuildCtrl', function () {

  // load the controller's module
  beforeEach(module('bikebuilderApp'));

  var EditbuildCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditbuildCtrl = $controller('EditbuildCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
