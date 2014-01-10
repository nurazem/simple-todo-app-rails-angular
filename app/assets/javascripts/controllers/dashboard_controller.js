todoApp.controller('DashboardController',
  ['$scope', 'TaskList', '$location',
    function ($scope, TaskList, $location) {
      $scope.init = function () {
        $scope.task_lists = TaskList.query();
      }

      $scope.createTaskList = function (task_list) {
        TaskList.save(task_list, function (task_list) {
          $location.url("/task_lists/" + task_list.id);
        });
      };
}]);