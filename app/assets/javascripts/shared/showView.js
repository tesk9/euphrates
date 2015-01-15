app.factory('Show', ['$location', function($location) {
  var show;
  return {
    show: function() {
      if(show === undefined) { 
        show = true; 
      }
      return show;
    },
    updateShow: function() {
      if($location.path() === '/') {
        $location.path('/cart');
      } else {
        $location.path('/');
      }
      show = !show;
    } 
  }
}])