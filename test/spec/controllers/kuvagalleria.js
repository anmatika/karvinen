'use strict';

describe('Controller: KuvagalleriaCtrl', function () {

  // load the controller's module
  beforeEach(module('karvinenApp'));

  var KuvagalleriaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    KuvagalleriaCtrl = $controller('KuvagalleriaCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
