todoApp.factory("TaskList", ['$resource', function ($resource) {
  return $resource("/api/task_lists/:id", {id: "@id"});
}]);