var app = angular.module('app');

app.controller('homeCtrl', ['$scope', function($scope){

  $scope.name = 'Vildan';

  console.log($scope.name);

}])
