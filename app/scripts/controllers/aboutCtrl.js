var app = angular.module('app');

app.controller('aboutCtrl', ['$scope', function($scope){

  $scope.name = 'Name';

  console.log($scope.name);

}])
