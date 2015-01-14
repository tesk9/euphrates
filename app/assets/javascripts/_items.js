app.controller('itemsCtlr', ['$scope', 'Items', 'cartService', 'Show', function($scope, Items, cartService, Show) {
  $scope.items = Items.getAll();

  $scope.show = function() {
    return Show.show();
  }
  $scope.updateShow = Show.updateShow;

  $scope.cartContents = cartService.getCart();

  $scope.cartLength = function() {
    return cartService.cartNum();
  }

  $scope.cart = function(item) {
    item.quantity--;
    cartService.addToCart(item);
  }

  $scope.showPrice = function(item) {
    item.show = !item.show;
  }
}]);