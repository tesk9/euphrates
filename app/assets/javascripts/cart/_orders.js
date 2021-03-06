app.controller('cartController', ['$scope', 'Orders', 'cartService', 'Show', function($scope, Orders, cartService, Show) {
  $scope.cartContents = cartService.getCart();

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
    $scope.showForm = true;
    angular.element(".remove-from-order").addClass('hide');
    angular.element(".checkout").addClass('hide');
  }

  $scope.submitOrder = function() {
    if($scope.orderName) {
      $scope.hideForm = true;
      Orders.postOrder({person: $scope.orderName, cost: $scope.totalPrice()});
      cartService.completeOrder(true);
      angular.element(".form-horizontal").before("<div class='container'><h5>Your order has been submitted.<br> Please save a copy of this page for your records.</h5></div>");
    }
  }

}]);