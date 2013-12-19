'use strict';

angular.module('bikebuilderApp', ['ngResource', 'ui.router'])
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
      });

  }])
  .config(["$httpProvider", function($httpProvider) {

    $httpProvider.defaults.headers.common['Accept'] = "application/json";

  }]);

angular.module('bikebuilderApp').constant('API_HOST', 'http://localhost\\:3000');

/* fallback router */
angular.module('bikebuilderApp')
  .config(['$urlRouterProvider', function ($urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

  }]);
