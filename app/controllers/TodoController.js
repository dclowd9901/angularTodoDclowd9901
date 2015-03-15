'use strict';

angular.module('angularTodo')
  .controller('TodoController', [
    '$scope',
    function($scope) {

      $scope.isEditing = false;

      if ($scope.todo.title === '') {
        $scope.isEditing = true;
      }

      $scope.edit = function() {
        this.isEditing = true;
      }

      $scope.doneEditing = function() {
        this.isEditing = false;
      }
    }
  ]);