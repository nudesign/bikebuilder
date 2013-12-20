'use strict';

angular.module('bikebuilderApp')
  .controller('AddComponentToBuildCtrl', ['$scope', '$stateParams', 'Component', 'Build', function ($scope, $stateParams, Component, Build) {

    console.log($scope.$parent.build);

    if ($stateParams.component_type) {
      $scope.components = Component.byType({component_type: $stateParams.component_type});
    } else {
      $scope.components = Component.query();
    }

    $scope.addComponentToBuild = function (component_id, build_id) {
    };

  }]);
