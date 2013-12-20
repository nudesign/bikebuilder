'use strict';

angular.module('bikebuilderApp')
  .factory('Component', ['$resource', 'API_HOST', function ($resource, API_HOST) {

    return $resource(API_HOST + '/components/:id', {id: '@id'},
      {byType: {
        method: 'GET',
        isArray: true
      }})

    }]);
