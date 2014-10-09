'use strict';

angular.module('ursamajorApp')
  .controller('SubmissionformCtrl', function ($scope) {

        $scope.format = [
            '',
            'Artist Statement',
            'Humanities Proposal',
            'Science or Social Science Abstract'
        ];

        $scope.type = [
            '',
            'Poster or Visual Display',
            'Oral Presentation',
            'Performance'
        ];

        $scope.sizes = [
            'Small',
            'Medium',
            'Large',
            'X-Large',
            'XX-Large'
        ];

        $scope.yesORno = [
            'Yes',
            'No'
        ];

        $scope.value = [
            {titleName: String}
        ];
  });
