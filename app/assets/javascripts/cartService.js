app.service('cartService', function() {
  var cartContents = [];
  var show;
  var cartHasNum;

  var addToCart = function(item) {
    cartHasNum++;
    if(cartContents.indexOf(item) === -1) {
      item["cartCounter"] = 1;
      cartContents.push(item);
    } else {
      item["cartCounter"]++;
    }
  }

  var cartLength = function() {
    if(cartHasNum !== undefined) {
      return cartHasNum;
    } else {
      cartHasNum = 0;
      return cartHasNum;
    }
  }

  var getCart = function() {
    return cartContents;
  }

  var showList = function() {
    show = (show !== undefined) ? show : true;
    return show; 
  }

  var updateShow = function() {
    show = !show;
  }

  return {
    addToCart: addToCart,
    getCart: getCart,
    showList: showList,
    updateShow: updateShow,
    cartNum: cartLength
  }
})
