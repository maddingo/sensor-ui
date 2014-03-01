'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('sensorApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of graphData to the scope', function () {
    expect(scope.graphData).toBeDefined();
    expect(scope.graphData.length).toBeGreaterThan(0);
    expect(scope.graphData[0].length).toBeGreaterThan(3);
  });
});
