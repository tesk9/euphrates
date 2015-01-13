app.controller('cartController', ['$scope', 'cartService', function($scope, cartService) {
  $scope.cartContents = cartService.getCart();

  $scope.showList = function() {
    return cartService.showList();
  }

  $scope.updateShowList = function() {
    return cartService.updateShow();
  }

  $scope.totalPrice = function() {
    var total = 0;
    $scope.cartContents.forEach(function(v,i,a) {
      v.cost = v.cartCounter * v.price;
      total += v.cost;
    })
    return total;
  }

  $scope.removeItem = function(item) {
    item.quantity++;
    cartService.removeItem(item);
  }

  $scope.checkout = function(e) {
    angular.element(".remove-from-order").addClass('hide');
    angular.element(".checkout").addClass('hide');
  }

}]);