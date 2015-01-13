app.factory('Show', [function() {
  var show;
  return {
    show: function() {
      if(show === undefined) { 
        show = true; 
      }
      return show;
    },
    updateShow: function() {
      console.log("clicked");
      show = !show;
      console.log(show);
    } 
  }
}])