todoApp.factory("Task", ['$resource', function ($resource) {
    return $resource("/api/task_lists/:task_list_id/tasks/:id", {id: "@id", task_list_id:"@task_list_id"},
      {update: {method: 'PUT'}});
}]);