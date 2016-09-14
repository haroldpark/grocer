angular.module('ingredient-check')
.factory('appFactory', ['$http', function($http) {

  var groceryCart = [];

  var watchGroceryCartChanges = function () {
    console.log('hello there')
    var shoppingList = {};
    for (var i=0; i<groceryCart.length; i++) {
      var recipeIngredientsArray = groceryCart[i].recipe.ingredients;
      for (var j=0; j<groceryCart[i].recipe.ingredients.length; j++) {
        var ingredientName = recipeIngredientsArray[j].food;
        var ingredientQuantity = recipeIngredientsArray[j].quantity;
        var ingredientMeasurement = recipeIngredientsArray[j].measure;
        if (!shoppingList[ingredientName]) {
          shoppingList[ingredientName] = {};
        }

        if (shoppingList[ingredientName][ingredientMeasurement]) {
          shoppingList[ingredientName][ingredientMeasurement] += ingredientQuantity;
        }
        else {
          shoppingList[ingredientName][ingredientMeasurement] = ingredientQuantity;
        }

      }
    }
    return shoppingList;
    console.log('SHOOPING', shoppingList);
  }


  var sendQueryToEdamam = function (query) {
    return $http({
      method: 'POST',
      url: '/api/getRecipes',
      data: { query: query }
    })
    .then(function (response) {
        return response.data.hits;
      }).catch(function(error) {
        console.log(error.status, error);
      });
  }

  var deleteUnessaryRecipeData = function (data) {
    for (var i=0; i<data.length; i++) {
      delete data[i].recipe.shareAs;
      delete data[i].recipe.cautions;
      delete data[i].recipe.ingredientLines;
      delete data[i].recipe.totalDaily;
      delete data[i].recipe.totalWeight;
      delete data[i].recipe.digest;
    }
    return data;
  }

  return {
    sendQueryToEdamam: sendQueryToEdamam,
    deleteUnessaryRecipeData: deleteUnessaryRecipeData,
    watchGroceryCartChanges: watchGroceryCartChanges,
    groceryCart: groceryCart
  };
}])
