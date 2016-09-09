angular.module('ingredient-check', [
  'ui.router'
])
.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/search');

  $stateProvider.state('search', {
    url: '/search',
    templateUrl: '/search/search.html'
  })
  .state('results', {
    url: '/results',
    templateUrl: '/results/results.html'
  });

})
