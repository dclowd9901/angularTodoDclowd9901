(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./app/app.js":[function(require,module,exports){
'use strict';

// Declare app level module which depends on views, and components
// angular.module('myApp', [
//   'ngRoute',
//   'myApp.view1',
//   'myApp.view2',
//   'myApp.version'
// ]).
// config(['$routeProvider', function($routeProvider) {
//   $routeProvider.otherwise({redirectTo: '/view1'});
// }]);

angular.module('angularTodo', ['ngTouch']);

require('./controllers/TodoController');
require('./controllers/TodoListController');

},{"./controllers/TodoController":"/Users/ddrew/dev/angularTodo/app/controllers/TodoController.js","./controllers/TodoListController":"/Users/ddrew/dev/angularTodo/app/controllers/TodoListController.js"}],"/Users/ddrew/dev/angularTodo/app/controllers/TodoController.js":[function(require,module,exports){
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
},{}],"/Users/ddrew/dev/angularTodo/app/controllers/TodoListController.js":[function(require,module,exports){
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
},{}]},{},["./app/app.js"]);

//# sourceMappingURL=bundle.js.map