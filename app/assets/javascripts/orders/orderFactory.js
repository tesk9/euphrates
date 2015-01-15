app.factory("Orders", ['$resource', function($resource) {
  var Orders = $resource("/orders");

  var postOrder = function(order) {
    Orders.save(order);
  }

  var getAll = function() {
    return Orders.query();
  }

  return {
    postOrder: postOrder,
    getOrders: getAll
  }
}])