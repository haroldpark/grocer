angular.module('grocer')
.factory('appFactory', ['$http', function($http) {

  var groceryCart = [];
  function checkMeasureAndQuantityEquality (measure, name) {
    return measure == name || measure + 's' == name;
  }

  function formatSMSMessage (shoppingList) {
    var msg = '\n';
    for (var prop in shoppingList) {
      for (var deepProp in shoppingList[prop]) {
        msg += shoppingList[prop][deepProp];
        msg += deepProp;
        msg += ' ';
        msg += prop;
        msg += '\n';
      }
    }
    return msg;
  }

  var checkIfRecipeIsInCart = function (label) {
    for (var i=0; i<groceryCart.length; i++) {
      if (groceryCart[i].recipe.label == label) {
        return true;
      }
    }
    return false;
  }

  var sendShoppingListToTwilioAPI = function (phoneNumber, shoppingList) {
    var smsMessage = formatSMSMessage(shoppingList);
    if (smsMessage.length) {
      return $http({
        method: 'POST',
        url: '/api/sendList',
        data: {
          number: phoneNumber,
          list: smsMessage
        }
      })
      .then(function (response) {

        }).catch(function(error) {
          console.log(error.status, error);
        });
    }
  }

  var watchGroceryCartChanges = function () {
    var shoppingList = {};
    for (var i=0; i<groceryCart.length; i++) {
      var ingredientServingRatio = groceryCart[i].recipe.yield/groceryCart[i].originalYield || 1;

      var recipeIngredientsArray = groceryCart[i].recipe.ingredients;
      for (var j=0; j<groceryCart[i].recipe.ingredients.length; j++) {
        var ingredientName = recipeIngredientsArray[j].food;
        var ingredientQuantity = recipeIngredientsArray[j].quantity;
        var ingredientMeasurement = recipeIngredientsArray[j].measure;

        if(checkMeasureAndQuantityEquality(ingredientMeasurement, ingredientName)) {
          ingredientMeasurement = '';
        }

        if (!shoppingList[ingredientName]) {
          shoppingList[ingredientName] = {};
        }

        if (shoppingList[ingredientName][ingredientMeasurement]) {
          shoppingList[ingredientName][ingredientMeasurement] += ingredientQuantity * ingredientServingRatio;
        }
        else {
          shoppingList[ingredientName][ingredientMeasurement] = ingredientQuantity * ingredientServingRatio;
        }

      }
    }
    return shoppingList;
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
    groceryCart: groceryCart,
    checkIfRecipeIsInCart: checkIfRecipeIsInCart,
    sendShoppingListToTwilioAPI: sendShoppingListToTwilioAPI
  };
}])
