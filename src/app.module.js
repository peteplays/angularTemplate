module.exports = angular.module('angTemplate', [])
  .directive('appDirective', require('./app.directive'))
  .controller('appController', require('./app.controller'))
;