'use strict';

describe('Controller: Kuvagalleria3Ctrl', function () {

  // load the controller's module
  beforeEach(module('karvinenApp'));

  var Kuvagalleria3Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Kuvagalleria3Ctrl = $controller('Kuvagalleria3Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
