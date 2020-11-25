"use strict";
const reviewApp = angular.module('reviewApp', [
    'ngRoute',
    'ngResource'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.when('/', {
        templateUrl: './templates/main-page.html',
        controller: 'MainpageController'
    });
    $routeProvider.when('/new-feedback', {
        templateUrl: './templates/new-feedback.html',
        controller: 'NewFeedbackController'
    });
    $routeProvider.when('/reviews', {
        templateUrl: './templates/reviews.html',
        controller: 'ReviewsController'
    });
    $routeProvider.otherwise({redirectTo: '/'});

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}]);
