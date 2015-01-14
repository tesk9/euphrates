app.factory("Orders", ['$resource', function($resource) {
  var Orders = $resource("/orders");

  var postOrder = function(order) {
    Orders.save(order);
  }

  return {
    postOrder: postOrder
  }
}])