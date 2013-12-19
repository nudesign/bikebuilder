'use strict';

angular.module('bikebuilderApp')
  .factory('Build', ['$resource', 'API_HOST', function ($resource, API_HOST) {
      return $resource(API_HOST + '/builds/:id', {id: '@id'});
    }]);
