app.factory('Items', ['$resource', function($resource) {
  var Items = $resource('/items');
  var Item = $resource('/items/:id', {id: "@id"}, {update: {method: 'PATCH'}});

  var getAll = function() {
    var items = Items.query();
    return items;
  }

  var post = function(items) {
    items.forEach(function(v) {
      Items.save(v);
    })
  }

  var updateItems = function(items) {
    items.forEach(function(v) {
      var item = Item.get({id: v.id});
      item.$promise.then(function(item) {
        item.quantity = v.quantity;
        item.$update()
      });
    })
  }

  return { 
    getAll: getAll,
    post: post,
    updateItems: updateItems
  }
}])