myApp.controller("InvoiceController", function($scope) {
    $scope.itemList = ["Lord of the Rings", "Drive", "Science of Sleep", "Back to the Future", "Oldboy"];

    $scope.Items = [];
    $scope.addItem = function(item) {
        $scope.Item = null;
        $scope.Items.push(item);
        $('input[id="id"]').focus();
    }
    $scope.removeItem = function(index) {
        $scope.Items.splice(index, 1);
    }

    $scope.getItemDetails=function(selected)
    {
    	console.log(selected);
    	$('input[name="sell_price"]').focus();
    }
})