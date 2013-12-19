'use strict';

describe('Controller: ComponentsindexCtrl', function () {

  // load the controller's module
  beforeEach(module('bikebuilderApp'));

  var ComponentsindexCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ComponentsindexCtrl = $controller('ComponentsindexCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
