'use strict';

angular.module('bikebuilderApp', ['ngResource', 'ui.router']);

angular.module('bikebuilderApp').config(["$httpProvider", function($httpProvider) {
  $httpProvider.defaults.headers.common['Accept'] = "application/json";
}]);
angular.module('bikebuilderApp').constant('API_HOST', 'http://localhost\\:3000');
