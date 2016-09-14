angular.module('ingredient-check')
.controller('search', ['$scope', 'appFactory', function($scope, appFactory){
  $scope.searchQuery, $scope.recipeData = [], $scope.groceryCart = [];

  $scope.roundNumber = function (number) {
    return Math.floor(number, -1);
  }


  $scope.sendQuery = function (query) {
    appFactory.sendQueryToEdamam(query).then( function(data) {
      $scope.recipeData = appFactory.deleteUnessaryRecipeData(data);
      console.log($scope.recipeData);
    }).catch(function(error) {
      console.log(error);
    });
  }

  $scope.sendToGroceryCart = function (recipeIndex) {
    $scope.groceryCart.push($scope.recipeData[recipeIndex]);
    console.log('HERE IS GROCERY CART', $scope.groceryCart)
  }

  $scope.removeFromGroceryCart = function (recipeIndex) {
    $scope.groceryCart.splice(recipeIndex, 1);
  }

}])
.animation('.moreInfoPane', function() {
	var NG_HIDE_CLASS = 'ng-hide';
	return {
		beforeAddClass: function(element, className, done) {
			if(className === NG_HIDE_CLASS) {
				element.slideUp(done);
			}
		},
		removeClass: function(element, className, done) {
			if(className === NG_HIDE_CLASS) {
				element.hide().slideDown(done);
			}
		}
	}
});
