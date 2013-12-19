'use strict';

describe('Service: Buildtypecomponents', function () {

  // load the service's module
  beforeEach(module('BikebuilderApp'));

  // instantiate service
  var Buildtypecomponents;
  beforeEach(inject(function (_Buildtypecomponents_) {
    Buildtypecomponents = _Buildtypecomponents_;
  }));

  it('should do something', function () {
    expect(!!Buildtypecomponents).toBe(true);
  });

});
