app.controller('orderController', ['$scope', 'Orders', function($scope, Orders) {
  $scope.allOrders = Orders.getOrders();

  $scope.parseDate = function(date) {
    if(date) {
      var dateArr = date.split("-"),
        year = dateArr[0],
        month = dateArr[1],
        day = dateArr[2].split("").splice(0,2).join("");
      return month + "-" + day + "-" + year;
    } else {
      return " ";
    }
  };
}]);