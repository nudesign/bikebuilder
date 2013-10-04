'use strict';

angular.module('bikebuilderApp', ['ngResource', 'ui.router'])
  .config(['$stateProvider', function ($stateProvider) {

    /* routers */
    $stateProvider
      .state('home', {
        url: '',
        views: {
          "header" : {
            templateUrl: 'views/shared/header.html'
          },
          "main" : {
            templateUrl: 'views/index.html'
          }
        }
      });

  }]);

/* fallback router */
angular.module('bikebuilderApp')
  .config(['$urlRouterProvider', function ($urlRouterProvider) {
    
    $urlRouterProvider.otherwise('');

  }]);
