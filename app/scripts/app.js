'use strict';

angular.module('bikebuilderApp', ['ngResource', 'ui.router']);

// set headers for rails integration
angular.module('bikebuilderApp').config(["$httpProvider", function($httpProvider) {
  $httpProvider.defaults.headers.common['Accept'] = "application/json";
}]);

// define api host constant for resource routing
angular.module('bikebuilderApp').constant('API_HOST', 'http://localhost\\:3000');
