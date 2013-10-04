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
            template: '<h1 style="font-size: 60px">{{ type }}</h1>',
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
