'use strict';

angular.module('bikebuilderApp')
  .controller('NewBuildCtrl', ['$scope', '$stateParams', 'BuildTypeComponents', 'Build', function ($scope, $stateParams, BuildTypeComponents, Build) {
    
    var build = new Build({build_type: $stateParams.type});
    console.log(build);

    $scope.build_type = $stateParams.type;
    $scope.build_type_components = BuildTypeComponents.query({type: $scope.build_type});

    $scope.build = {
      name: "My " +  $scope.build_type + " Bike",
      weight: 250,
      cost: 1000     
    };

  }]);
