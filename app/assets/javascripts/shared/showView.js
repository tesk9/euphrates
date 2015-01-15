app.factory('Show', ['$location', function($location) {
  return {
    updateShow: function() {
      if($location.path() === '/') {
        $location.path('/cart');
      } else {
        $location.path('/');
      }
    } 
  }
}])