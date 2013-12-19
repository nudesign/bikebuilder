'use strict';

angular.module('bikebuilderApp')
  .controller('NewBuildCtrl', ['$scope', '$stateParams', 'BuildTypeComponents', function ($scope, $stateParams, BuildTypeComponents) {
    
    $scope.build_type = $stateParams.type;
    $scope.build_type_components = BuildTypeComponents.query({type: $scope.build_type});
  }]);
