'use strict';

describe('Controller: Kuvagalleria2Ctrl', function () {

  // load the controller's module
  beforeEach(module('karvinenApp'));

  var Kuvagalleria2Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Kuvagalleria2Ctrl = $controller('Kuvagalleria2Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
