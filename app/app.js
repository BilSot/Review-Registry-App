"use strict";
const reviewApp = angular.module('reviewApp', [
    'ngRoute',
    'ngResource',
    'ngSanitize',
    'ngCookies'
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
    $routeProvider.otherwise({redirectTo: '/'});

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}]);
