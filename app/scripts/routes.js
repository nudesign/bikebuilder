'use strict';

angular.module('bikebuilderApp')
  .config(['$stateProvider', function ($stateProvider) {

    /* routers */
    $stateProvider
      .state('home', {
        url: '/',
        views: {
          "header" : {
            templateUrl: 'views/application/header.html'
          },
          "main" : {
            templateUrl: 'views/builds/index.html'
          }
        }
      })

      .state('builds#new', {
        url: '/builds/new/:type',
        views: {
          "header" : {
            templateUrl: 'views/application/header.html'
          },
          "main" : {
            templateUrl: 'views/builds/new.html',
            controller: 'NewBuildCtrl'
          }
        }
      })

      .state('builds#new.addComponent', {
        url: '/add-component/:component_type',
        views: {
          "main@" : {
            templateUrl: 'views/components/index.html',
            controller: 'ComponentsIndexCtrl'
          }
        }
      });

  }])
  .config(['$urlRouterProvider', function ($urlRouterProvider) {

    /* fallback router */
    $urlRouterProvider.otherwise('/');

  }]);
