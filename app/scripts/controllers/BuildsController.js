'use strict';

bb_app.controller('BuildsController', ['$scope', '$stateParams', '$http', function ($scope, $stateParams, $http) {

  $scope.bike_type = $stateParams.type;

  $scope.component_types = $http.get('http://localhost:3000/builds/new/' + $stateParams.type);

}]);
