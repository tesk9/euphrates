app.service('cartService', function() {
  var cartContents = [];
  var cartHasNum;
  var completeOrd;

  var addToCart = function(item) {
    cartHasNum++;
    if(cartContents.indexOf(item) === -1) {
      item["cartCounter"] = 1;
      cartContents.push(item);
    } else {
      item["cartCounter"]++;
    }
  }

  var removeFromCart = function(item) {
    cartHasNum--;
    var location = cartContents.indexOf(item);
    cartContents.splice(location, 1);
    return cartContents;
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

  var checkout = function() {
    return completeOrd;
  }

  var completeOrder = function(status) {
    // cartContents = [];
    // cartHasNum = 0;
    completeOrd = status;
  }

  return {
    addToCart: addToCart,
    getCart: getCart,
    cartNum: cartLength,
    removeItem: removeFromCart,
    checkout: checkout,
    completeOrder: completeOrder
  }
})
