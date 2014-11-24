'use strict';

describe('Controller: RuokalistaCtrl', function () {

  // load the controller's module
  beforeEach(module('karvinenApp'));

  var RuokalistaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RuokalistaCtrl = $controller('RuokalistaCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    //expect(scope.awesomeThings.length).toBe(3);
  });
});
