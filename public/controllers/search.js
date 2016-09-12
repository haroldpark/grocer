angular.module('ingredient-check')
.controller('search', ['$scope', 'appFactory', function($scope, appFactory){
  $scope.searchQuery;
  $scope.roundNumber = function (number) {
    return Math.floor(number, -1);
  }
  $scope.sendQuery = function(query) {
    appFactory.sendQueryToEdamam(query).then( function(data) {
      $scope.recipeData = appFactory.deleteUnessaryRecipeData(data);
    }).catch(function(error) {
      console.log(error);
    });
  }
}])
.animation('.ingredients', function() {
	var NG_HIDE_CLASS = 'ng-hide';
	return {
		beforeAddClass: function(element, className, done) {
			if(className === NG_HIDE_CLASS) {
        console.log('HELLO THRE')
				element.slideUp(done);
			}
		},
		removeClass: function(element, className, done) {
			if(className === NG_HIDE_CLASS) {
        console.log('HELLO THRE')
				element.hide().slideDown(done);
			}
		}
	}
})
.animation('.moreInfo', function() {
	var NG_HIDE_CLASS = 'ng-hide';
	return {
		beforeAddClass: function(element, className, done) {
			if(className === NG_HIDE_CLASS) {
        console.log('HELLO THRE')
				element.slideUp(done);
			}
		},
		removeClass: function(element, className, done) {
			if(className === NG_HIDE_CLASS) {
        console.log('HELLO THRE')
				element.hide().slideDown(done);
			}
		}
	}
});
