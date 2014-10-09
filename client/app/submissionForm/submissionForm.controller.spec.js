'use strict';

describe('Controller: SubmissionformCtrl', function () {

  // load the controller's module
  beforeEach(module('ursamajorApp'));

  var SubmissionformCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SubmissionformCtrl = $controller('SubmissionformCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
