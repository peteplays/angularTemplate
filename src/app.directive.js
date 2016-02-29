// @ngInject
module.exports = function() {

  return {
    restrict: 'AE',
    replace: true,
    template: require('./app.html'),
    controller: 'appController',
    link: function(scope, element, attrs) {

    }
  };

};