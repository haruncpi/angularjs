myApp.controller('CartController', function($scope, $http, ipCookie) {
    $scope.getCartObj = function() {
        if (ipCookie('cart')) {
            return ipCookie('cart');
        }
    }

    $scope.getCartTotal=function() {
        if ($scope.getCartObj() != null) {
            cartObj = $scope.getCartObj();
            var total = 0;
            for (var i in cartObj) {
                total = total + Number(cartObj[i].price) * Number(cartObj[i].quantity);
            }
            return total;
        }
    }
    $scope.$watch(function() {
        if ($scope.getCartObj() != null) {
            cartObj = $scope.getCartObj();
            var total = 0;
            for (var i in cartObj) {
                total = total + Number(cartObj[i].price) * Number(cartObj[i].quantity);
            }
            return total;
        }
    }, function() {
        $scope.getCartItems()
    });


    $scope.removeCartItem = function(id) {
        if ($scope.getCartObj() != null) {
            cartObj = $scope.getCartObj();
            for (var i in cartObj) {
                if (cartObj[i].id == id) {
                    //someArray.splice(x,1);
                    cartObj.splice(i, 1);
                    ipCookie('cart', JSON.stringify(cartObj));
                    break;
                }
            }
        }
    }
    $scope.checkCartItem = function(id) {
        if ($scope.getCartObj() != null) {
            cartObj = $scope.getCartObj();
            for (var i in cartObj) {
                if (cartObj[i].id == id) {
                    return true;
                    break;
                }
            }
        }
    }
    $scope.getCartItems = function() {
        $scope.cartItems = $scope.getCartObj();
    }
    $scope.addToCart = function(obj) {
        angular.merge(obj, {"quantity":1});
        if ($scope.checkCartItem(obj.id)) {
            if ($scope.getCartObj() != null) {
                cartObj = $scope.getCartObj();
                for (var i in cartObj) {
                    if (cartObj[i].id == obj.id) {
                        var updateQty = Number(cartObj[i].quantity) + 1;
                        cartObj[i].quantity = updateQty;
                        ipCookie('cart', JSON.stringify(cartObj));
                        break;
                    }
                }
            }
        } else {
            // add postion
            if ($scope.getCartObj() != null) {
                cartObj = $scope.getCartObj();
                cartObj.push(obj);
                ipCookie('cart', JSON.stringify(cartObj));
            } else {
                var item = [obj];
                ipCookie('cart', JSON.stringify(item));
            }
            // end add postion
        }
    }
    $scope.discreaseCartItem = function(id) {
        if ($scope.getCartObj() != null) {
            cartObj = $scope.getCartObj();
            for (var i in cartObj) {
                if (cartObj[i].id == id) {
                    var updateQty = Number(cartObj[i].quantity) - 1;
                    cartObj[i].quantity = updateQty;
                    ipCookie('cart', JSON.stringify(cartObj));
                    if ($scope.getItemQty(id) == 0) {
                        $scope.removeCartItem(id);
                        break;
                    } else {
                        break;
                    }
                }
            }
        }
    }
    
    $scope.increaseCartItem = function(id) {
        if ($scope.getCartObj() != null) {
            cartObj = $scope.getCartObj();
            for (var i in cartObj) {
                if (cartObj[i].id == id) {
                    var updateQty = Number(cartObj[i].quantity) + 1;
                    cartObj[i].quantity = updateQty;
                    ipCookie('cart', JSON.stringify(cartObj));
                    if ($scope.getItemQty(id) == 0) {
                        $scope.removeCartItem(id);
                        break;
                    } else {
                        break;
                    }
                }
            }
        }
    }

    $scope.getItemQty = function(id) {
        if ($scope.getCartObj() != null) {
            cartObj = $scope.getCartObj();
            for (var i in cartObj) {
                if (cartObj[i].id == id) {
                    return cartObj[i].quantity;
                    break;
                }
            }
        }
    }
    $scope.init = function() {
        $scope.products = [{
            "id": "P-160100001",
            "name": "Abc",
            "photo": "https://static.daraz.com.bd/p/jennys-0022-11012-1-catalog.jpg",
            "price": "1002"
        }, {
            "id": "P-160100002",
            "name": "Helio Hex",
            "photo": "https://static.daraz.com.bd/p/sony-5431-81774-1-catalog.jpg",
            "price": "2343"
        }, {
            "id": "P-160100003",
            "name": "Smart TV",
            "photo": "https://static.daraz.com.bd/p/sony-5431-81774-1-catalog.jpg",
            "price": "2343"
        }]
        $scope.getCartItems();
    }
    $scope.init();


    //checkout
    $scope.shipping_area='Chittagong';
    $scope.shipping_cost=0
    $scope.shippingCal=function(){
        $scope.shipping_area=='Chittagong'?$scope.shipping_cost=0:$scope.shipping_cost=50;    
    }
    
    

});





myApp.directive('remove', function() {
    return function(scope, elm, attrs) {
        elm.bind('click', function(e) {
            e.preventDefault();
            elm.removeClass('show');
            setTimeout(function() {
                scope.$apply(function() {
                    scope.$eval(attrs.remove);
                });
            }, 200);
        });
    };
});
myApp.directive('animate', function() {
    return function(scope, elm, attrs) {
        setTimeout(function() {
            elm.addClass('show');
        });
    };
})