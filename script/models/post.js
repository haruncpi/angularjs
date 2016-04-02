myApp.factory('Post', function($resource) {
    return $resource('http://localhost/wp-test/wp-json/posts/:id');
});