'use strict';

bb_app.factory('Build', ['$resource',

  function ($resource) {

    return $resource('builds/:build_id', {}, {

      query: {method: 'GET', params: {build_id: 'all'}, isArray: true}

    });

  }

]);
