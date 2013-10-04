'use strict';

angular.module('bikebuilderApp')
  .controller('NewbuildCtrl', function ($scope, $stateParams) {
    
    $scope.bike_type = $stateParams.type;

  });
