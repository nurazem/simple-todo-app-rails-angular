todoApp.controller('DashboardController', ['$scope', 'TaskList', '$location', '$routeParams',
  function($scope, TaskList, $location, $routeParams) {
      $scope.init = function() {
          $scope.task_lists = TaskList.query();
      }

      $scope.createTaskList = function(name) {
          TaskList.create({name: name}, function(task_list){
              $location.url("/task_lists/#{task_list.id}");
          })
      }


  }
]);