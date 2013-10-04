'use strict';

angular.module('bikebuilderApp')
  .controller('NewBuildCtrl', function ($scope, $stateParams) {
    
    $scope.bike_type = $stateParams.type;

  });
