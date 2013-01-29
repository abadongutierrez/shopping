'use strict';

shoppingApp.directive('product', function() {
  return {
    template: '<h3>{{item.name}}</h3>' +
    '<img ng-src="{{item.img}}" width="200px"/>' +
    '{{item.price | currency}}',
    restrict: 'E',
    scope: {
        'item': '='
    }
  };
});
