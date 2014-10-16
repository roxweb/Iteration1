'use strict';

angular.module('ursamajorApp')
  .controller('SubmissionformCtrl', function ($scope, $http) {

        $scope.format = [
            'Artist Statement',
            'Humanities Proposal',
            'Science or Social Science Abstract'
        ];

        $scope.sponsors = [
            'UROP',
            'MAP',
            'MMP',
            'LSAMP'
        ];

        $scope.sponsorsSelected = [

        ];



        $scope.typesOfPres = [
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

        $scope.tshirtSize = [

        ]

        $scope.yesORno = [
            'Yes',
            'No'
        ];

        $scope.value = [
            {titleName: String}
        ];

        $scope.submitS = function() {
        $http.post('/api/submissions', {
            adviserMeet: $scope.metWithAdviser,
            titleName: $scope.titleName,
            format: $scope.format,
            abstract: $scope.abstract,
            typeOfPres: $scope.typePres,
            flexibleType: $scope.flexibleType,
            lastName: $scope.lastName,
            firstName: $scope.firstName,
            lastNameCo: $scope.lastNameCo,
            firstNameCo: $scope.firstNameCo,
            lastNameCo2: $scope.lastNameCo2,
            firstNameCo2: $scope.firstNameCo2,
            studentEmail: $scope.studentEmail,
            studentCoEmail: $scope.studentCoEmail,
            studentCo2Email: $scope.studentCo2Email,
            discipline: $scope.discipline,
            sponsor: $scope.sponsorsSelected,
            adviser: $scope.advisor,
            adviserEmail: $scope.advisorEmail,
            feature: $scope.feature,
            mediaNeeds: $scope.mediaNeeds,
            otherNeeds: $scope.otherNeeds,
            tshirt: $scope.tshirt,
            tshirtCo: $scope.tshirtCo,
            tshirtCo2: $scope.tshirtCo2,
            otherInfo: $scope.otherInfo
        }).success(function(thatTHing){})
        }
  });
