'use strict';

var bb_app = angular.module('bikebuilderApp', ['ngResource', 'ui.router']);

bb_app.config(['$httpProvider', function($httpProvider) {

  $httpProvider.defaults.headers.common['Accept'] = 'application/json';
  delete $httpProvider.defaults.headers.common['X-Requested-With'];

}]);
