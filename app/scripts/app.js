'use strict';

angular.module('bikebuilderApp', ['ngResource', 'ui.router'])
  .config(['$stateProvider', function ($stateProvider) {

    /* routers */
    $stateProvider
      .state('home', {
        url: '',
        views: {
          "header" : {
            templateUrl: 'views/application/header.html'
          },
          "main" : {
            templateUrl: 'views/builds/index.html'
          }
        }
      })
      .state('new build', {
        url: '/builds/new/:type',
        views: {
          "header" : {
            templateUrl: 'views/application/header.html'
          },
          "main" : {
            templateURL: 'views/builds/new.html',
            controller: 'NewbuildCtrl'
          }
        }
      });

  }]);

/* fallback router */
angular.module('bikebuilderApp')
  .config(['$urlRouterProvider', function ($urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

  }]);
