'use strict';

bb_app.config(['$stateProvider', function ($stateProvider) {

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
          controller: 'BuildsController'
        }
      }
    });

}]);

/* fallback router */
bb_app.config(['$urlRouterProvider', function ($urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

}]);
