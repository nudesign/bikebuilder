'use strict';

angular.module('bikebuilderApp')
  .controller('ComponentsIndexCtrl', ['$scope', '$stateParams', 'Component', function ($scope, $stateParams, Component) {
  
      $scope.components = Component.byType({type: $stateParams.component_type})

    }]);
