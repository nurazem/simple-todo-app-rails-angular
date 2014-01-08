var todoApp = angular.module('todoApp', ['ngResource', 'ngRoute']);

todoApp.config(function ($routeProvider, $locationProvider) {
    // enable html5Mode for pushstate
  $locationProvider.html5Mode(true);

  $routeProvider
    .when('/', {
      redirectTo: '/dashboard'
    })
    .when('/dashboard', {
      templateUrl: '/templates/dashboard.html',
      controller: 'DashboardController'
      })
    .when('task_lists/:list_id', {
      templateUrl: '/templates/task_list.html',
      controller: 'TaskListController'
    });
});

$(document).on('page:load', function() {
  return $('[ng-app]').each(function() {
    var module = $(this).attr('ng-app');
    return angular.bootstrap(this, [module]);
  });
});