var app = angular.module('items', []);
app.controller('itemsCtlr', ['$scope', function($scope) {
  $scope.items = [
                {id: 1, name: "Buffalo", description: 'this is an item', price: 25, quantity: 34, url: "http://sustainablecommunitysolutions.com/wp-content/uploads/2008/05/buffalo.jpg"},
                {id: 2, name: "Elephant", description: '2this is an item', price: 225, quantity: 234, url: "http://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg"},
                {id: 3, name: "Aurochs", description: 'item3', price: 15, quantity: 1, url: "http://fc05.deviantart.net/fs70/i/2010/227/8/7/The_Aurochs_by_phan_tom.jpg"}
                ];
  $scope.cartContents = [];

  $scope.cart = function(item) {
    item.quantity--;
    $scope.cartContents.push(item);
  }

  $scope.showPrice = function(item) {
      item.show = !item.show;
  }

}]);

app.controller('cartController', ['$scope', function($scope) {
  
}]);
