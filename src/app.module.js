module.exports = angular.module('angTemplate', [])
  .component('myComponent', {
    templateUrl: '/src/app.html',
    controller: require('./app.controller')
  })

;
