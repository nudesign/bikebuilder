'use strict';

describe('Service: Buildmanager', function () {

  // load the service's module
  beforeEach(module('BikebuilderApp'));

  // instantiate service
  var Buildmanager;
  beforeEach(inject(function (_Buildmanager_) {
    Buildmanager = _Buildmanager_;
  }));

  it('should do something', function () {
    expect(!!Buildmanager).toBe(true);
  });

});
