'use strict';

describe('Controller: CheckoutCtrl', function() {

  // load the controller's module
  beforeEach(module('shoppingApp'));

  var CheckoutCtrl,
    scope, basket = {};

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {
      basket: basket
    };
    CheckoutCtrl = $controller('CheckoutCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.basket).not.toBe(null);
  });
});
