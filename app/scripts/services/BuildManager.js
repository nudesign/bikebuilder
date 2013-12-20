'use strict';

angular.module('bikebuilderApp')
  .factory('BuildManager', ['Build', function (Build) {

      var _build = new Build(),
          _loadBuild = function (id) {
            _build = Build.get({id: id});
          };
  
      return {
        build: _build,
        loadBuild: function (id) { return _loadBuild(id) }
      };
    }]);
