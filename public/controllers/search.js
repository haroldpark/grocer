angular.module('grocer')
.controller('search', ['$scope', 'appFactory', function($scope, appFactory){
  $scope.searchQuery, $scope.recipeData = [], $scope.groceryCart = appFactory.groceryCart;
  $scope.shoppingList;
  $scope.roundNumber = function (number) {
    return Math.floor(number, -1);
  }

  $scope.$watch('groceryCart', function() {
    $scope.shoppingList = appFactory.watchGroceryCartChanges();
  }, true);

  $scope.sendQuery = function (query) {
    appFactory.sendQueryToEdamam(query).then( function(data) {
      $scope.recipeData = appFactory.deleteUnessaryRecipeData(data);
    }).catch(function(error) {
      console.log(error);
    });
  }

  $scope.sendToGroceryCart = function (recipeIndex) {
    var recipe = $scope.recipeData[recipeIndex];
    var recipeName = recipe.recipe.label;
    if(!appFactory.checkIfRecipeIsInCart(recipeName)) {
      recipe.originalYield = recipe.recipe.yield;
      $scope.groceryCart.push($scope.recipeData[recipeIndex]);
    }

  }

  $scope.removeFromGroceryCart = function (recipeIndex) {
    $scope.groceryCart.splice(recipeIndex, 1);
  }

  $scope.sendShoppingListAsSMS = function (phoneNumber) {
    appFactory.sendShoppingListToTwilioAPI(phoneNumber, $scope.shoppingList);
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
