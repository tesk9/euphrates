app.controller('cartController', ['$scope', 'Orders', 'cartService', 'Show', function($scope, Orders, cartService, Show) {
  $scope.cartContents = cartService.getCart();

  $scope.show = function() {
    return Show.show();
  }
  $scope.updateShow = Show.updateShow;

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

  $scope.submitOrder = function() {
    $scope.hideForm = true;

    // $scope.orderComments

    Orders.postOrder({person: $scope.orderName, cost: $scope.totalPrice()})

  }

}]);