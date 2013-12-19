'use strict';

angular.module('bikebuilderApp')
  .factory('BuildTypeComponents', ['$resource', 'API_HOST', function ($resource, API_HOST) {
    return $resource(API_HOST + '/component_types/by_build/:type', {type: '@type'}, {query: {method: 'GET', isArray: false}});
  }]);
