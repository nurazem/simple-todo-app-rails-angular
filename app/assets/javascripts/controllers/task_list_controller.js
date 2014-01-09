todoApp.controller('TaskListController',
  ['$scope', 'Task', 'TaskList', '$location', '$routeParams',
  function($scope, Task, TaskList, $location, $routeParams) {
    $scope.init = function() {
        $scope.tasks =Task.query({task_list_id: $routeParams.task_list_id});
        $scope.task_list = TaskList.get({id: $routeParams.task_list_id});
    };

    $scope.createTask = function(name) {
    };
}]);