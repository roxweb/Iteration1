'use strict';

angular.module('ursamajorApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('submissionForm', {
        url: '/submissionForm',
        templateUrl: 'app/submissionForm/submissionForm.html',
        controller: 'SubmissionformCtrl'
      });
  });