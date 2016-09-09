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
        return response.data;
      }).catch( function(error) {
        console.log(error.status, error);
      });
  }


  return {
    sendQueryToEdamam: sendQueryToEdamam
  };
}])
