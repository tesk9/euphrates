app.factory('Items', ['$resource', function($resource) {
  var Items = $resource('/items');

  var getAll = function() {
    var items = Items.query();
    return items;
  }

  var post = function(items) {
    items.forEach(function(v) {
      Items.save(v);
    })
  }

  return { 
    getAll: getAll,
    post: post
  }
}])