var app = angular.module('app');

app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "views/home.html",
      controller: "homeCtrl"
    })
    .state('about', {
      url: "/about",
      templateUrl: "views/about.html",
      controller: "aboutCtrl"
    });
});
