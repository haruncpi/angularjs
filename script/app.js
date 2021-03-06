var myApp = angular.module('myApp', 
    [
        'ngRoute',
        'angular-loading-bar',
        'ngResource',
        'autocomplete',
        'io-barcode',
        'ja.qr',
        'chart.js',
        'ipCookie',
        'countTo'
        ]
);

myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
        	templateUrl: 'views/posts.html',
        	controller: 'PostController'
    	})
        .when('/invoice', {
            templateUrl: 'views/invoice.html',
            controller: 'InvoiceController'
        })
        .when('/barcode', {
            templateUrl: 'views/barcode.html',
            controller: 'BarcodeController'
        })
        .when('/qrcode', {
            templateUrl: 'views/qrcode.html',
            controller: 'QrcodeController'
        })
        .when('/chart', {
            templateUrl: 'views/chart.html',
            controller: 'ChartController'
        })
        .when('/todo', {
            templateUrl: 'views/todo.html',
            controller: 'TodoController'
        })
        .when('/cart', {
            templateUrl: 'views/cart.html',
            controller: 'CartController'
        })
        .when('/checkout', {
            templateUrl: 'views/checkout.html',
            controller: 'CartController'
        })
    	.otherwise({
        	redirectTo: '/'
    	});
});

myApp.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeBar = false;
    cfpLoadingBarProvider.parentSelector = '#my-loader';
    cfpLoadingBarProvider.spinnerTemplate = '<div>Custom Loading Message...</div>';
  }])

