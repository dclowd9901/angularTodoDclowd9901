'use strict';

angular.module('angularTodo')
  .controller('TodoListController', [
    '$scope', 
    '$http',
    function($scope, $http) {
      $http.get('/app/data/todos.json').success(function(data){
        $scope.todos = data;
      });

      $scope.newTodo = function() {
        $scope.todos.push({
          title: '',
          done: false
        });
      }

      $scope.clearFinishedTodos = function() {
        $scope.todos = _.filter($scope.todos, {done: false});
      }
    }
  ]);