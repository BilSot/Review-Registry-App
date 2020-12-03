reviewApp.controller("ReviewsController", ['$scope', 'ReviewsDataService', '$routeParams', '$location', '$window', 'dateFilter', function ReviewsController($scope, ReviewsDataService, $routeParams, $location, $window, dateFilter) {
    $scope.emojisShown = false;
    $scope.classVoted = '';
    $scope.sortReviewsBy = 'date';
    if($scope.sortReviewsBy === 'date'){
        dateFilter();
    }

    ReviewsDataService.getReviews()
        .then(res => {
            $scope.reviews = res.data.reviews;
        })
        .catch(err => {
            $location.url(`/${err.status}`);
        });

    $scope.addReviewVote = function (review) {
        ReviewsDataService.registerVote(review)
            .then(res => {
            })
            .catch(err => {
                alert("Your vote can not be registered at the moment. Please try again later");
                $window.location.reload();
            });
    };
}]);
