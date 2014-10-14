'use strict';

angular.module('ursamajorApp')
  .controller('SubmissionformCtrl', function ($scope, $http) {

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

        $scope.submitSubmission = function() {
        $http.post('/api/submissions', {
            titleName: $scope.title,
            format: $scope.format,
            abstract: $scope.abstract,
            typeofPres: $scope.type,
            flexibleType: $scope.space,
            lastName: $scope.studentLast,
            firstName: $scope.studentFirst,
            lastNameCo: $scope.studentCoLast,
            firstNameCo: $scope.studentCoFirst,
            lastNameCo2: $scope.studentCo2Last,
            firstNameCo2: $scope.studentCo2First,
            studentEmail: $scope.studentEmail,
            studentCoEmail: $scope.studentCoEmail,
            studentCo2Email: $scope.studentCo2Email,
            discipline: $scope.discipline,
            //sponsor: $scope.,
            adviser: $scope.advisor,
            adviserEmail: $scope.advisorEmail,
            feature: $scope.feature,
            mediaNeeds: $scope.mediaNeeds,
            otherNeeds: $scope.otherNeeds,
            tshirt: $scope.sizes
            //tshirtCo: $scope.,
            //tshirtCo2: String,
            //otherInfo: ,
        }).success(function())
        }
  });
