// @ngInject
module.exports = function() {

  return {
    restrict: 'AE',
    replace: true,
    template: '/src/app.html',
    controller: 'appController',
    transclude: true
  };

};
