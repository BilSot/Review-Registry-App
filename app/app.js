"use strict";
const reviewApp = angular.module('reviewApp', [
    'ngRoute',
    'ngSanitize'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.when('/', {
    });
    $routeProvider.when('/new-feedback', {
        templateUrl: './templates/new-feedback.html',
        controller: 'NewFeedbackController'
    });
    $routeProvider.when('/reviews', {
        templateUrl: './templates/reviews.html',
        controller: 'ReviewsController'
    });
    $routeProvider.when('/reviews/:id', {
        templateUrl: './templates/review-details.html',
        controller: 'ReviewDetailsController'
    });
    $routeProvider.when('/404', {
        templateUrl: './templates/404.html',
        controller: ''
    });
    $routeProvider.when('/500', {
        templateUrl: './templates/500.html',
        controller: ''
    });
    $routeProvider.otherwise({redirectTo: '/'});

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}]);
