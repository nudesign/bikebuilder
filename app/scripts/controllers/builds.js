'use strict';

angular.module('bikebuilderApp')
  .controller('buildsCtrl', function ($scope, $stateParams) {
    
    $scope.bike_type = $stateParams.type;

  });
