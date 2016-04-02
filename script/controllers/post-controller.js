myApp.controller('PostController', function($scope, $http,Post,$routeParams) {
    $scope.init = function() {
        $scope.posts = Post.query();
    }    
    $scope.init();
});

myApp.controller('SinglePostController',function($scope,$http,Post,$routeParams) {
    var postId = $routeParams.id;

    $scope.init = function() {
        $scope.post = Post.get({id:postId});
        $sce.trustAsHtml();
    }    
    $scope.init();
});