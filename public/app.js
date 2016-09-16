angular.module('grocer', [
  'ui.router',
  'ngAnimate'
])
.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/search');

  $stateProvider.state('search', {
    url: '/search',
    templateUrl: '/views/search.html',
    controller: 'search'
  })
  .state('results', {
    url: '/results',
    templateUrl: '/views/results.html',
    controller: 'results'
  });

})
