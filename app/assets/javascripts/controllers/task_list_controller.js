todoApp.controller('TaskListController',
  ['$scope', 'Task', 'TaskList', '$routeParams',
  function($scope, Task, TaskList, $routeParams) {

    $scope.priorities = [
      {id: 1, name:'High'},
      {id: 2, name:'Medium'},
      {id: 3, name:'Low'}
    ];

    $scope.statuses = [
      {val: 1, name:'Completed'},
      {val: 0, name:'Pending'}
    ];

    $scope.$back = function() {
      window.history.back();
    };

    $scope.taskForUpdate = function(task){
      $scope.selected_task = task;
    };

    $scope.init = function() {
      $scope.tasks =Task.query({task_list_id: $routeParams.task_list_id});
      $scope.task_list = TaskList.get({id: $routeParams.task_list_id});
    };

    $scope.createTask = function(task) {
      task.task_list_id = $routeParams.task_list_id
      Task.save(task, function(response) {
        if(response) {
          $scope.tasks.push(response);
          $scope.task = '';
        }
      });
    };

    $scope.deleteTask = function(task) {
      Task.delete({task_list_id: $routeParams.task_list_id, id: task.id}, function(response) {
        if(response){
          var index = $scope.tasks.indexOf(task);
          $scope.tasks.splice(index, 1);
        }
      });
    };

    $scope.updateTask = function(task) {
      Task.update({task_list_id: $routeParams.task_list_id, id: task.id, task: task}, function(response){
        $scope.selected_task = '';
      });
    };


    $scope.changeStatus = function(task) {
      if(task.completed == 0) {
        task.completed = 1;
      } else {
        task.completed = 0;
      }
      Task.update({task_list_id: $routeParams.task_list_id, id: task.id, task: task}, function(response){
        console.log(response);
      });
    };

}]);