'use strict';

describe('Controller: NewBuildCtrl', function () {

  // load the controller's module
  beforeEach(module('bikebuilderApp'));

  var NewBuildCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewBuildCtrl = $controller('NewBuildCtrl', {
      $scope: scope
    });
  }));

});
