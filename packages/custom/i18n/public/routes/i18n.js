'use strict';

angular.module('mean.i18n').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('About Us', {
      url: '/i18n/example',
      templateUrl: 'i18n/views/index.html'
    });
  }
]);
