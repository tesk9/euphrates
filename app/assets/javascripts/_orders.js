app.controller('cartController', ['$scope', 'cartService', function($scope, cartService) {
  $scope.cartContents = cartService.getCart();

  $scope.showList = function() {
    return cartService.showList();
  }

  $scope.totalPrice = function() {
    var total = 0;
    $scope.cartContents.forEach(function(v,i,a) {
      v.cost = v.cartCounter * v.price;
      total += v.cost;
    })
    return total;
  }

}]);