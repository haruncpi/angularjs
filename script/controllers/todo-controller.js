myApp.controller("TodoController", function($scope) {
    $scope.names = [];
    var data = ['Dean', 'Andy', 'Dan', 'Wizek', 'Pete', 'Pawel', 'Chris', 'Misko'];
    $scope.add = function() {
        if (data.length) $scope.names.push(data.pop());
    };
    $scope.remove = function(index) {
        data.push($scope.names.splice(index, 1)[0]);
    };
})
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