angular.module('ingredient-check')
.factory('appFactory', ['$http', function($http) {
  var sendQueryToEdamam = function (query) {
    console.log('we here', query)
    return $http({
      method: 'POST',
      url: '/api/getRecipes',
      data: {
        query: query
      }
    })
    .then( function (response) {
      console.log(response);
        return response.data.hits;
      }).catch( function(error) {
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
    deleteUnessaryRecipeData: deleteUnessaryRecipeData
  };
}])
