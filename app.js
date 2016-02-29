require('angular/angular.min');
require('angular-bootstrap/ui-bootstrap-tpls.min.js');
module.exports = angular.module('app', [
    'ui.bootstrap',
    require('./src/app.module').name
])
;