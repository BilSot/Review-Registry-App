reviewApp.controller("ReviewsController", ['$scope', 'ReviewsDataService', '$routeParams', 'dateFilter', function ReviewsController($scope, ReviewsDataService, $routeParams, dateFilter) {
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
            console.err("Error: ", err);
        });

    $scope.registerVote = function (review) {
        $scope.classVoted = 'voted';
        ReviewsDataService.registerVote(review)
            .then(res => {
              // console.log(res.data.message);
            })
            .catch(err => console.error(err));
    };
}]);
