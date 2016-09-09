angular.module('ingredient-check')
.controller('search', ['$scope', 'appFactory', function($scope, appFactory){
  $scope.searchQuery;
  $scope.sendQuery = function(query) {
    console.log(query);

    appFactory.sendQueryToEdamam(query);
  }
  
}]);
