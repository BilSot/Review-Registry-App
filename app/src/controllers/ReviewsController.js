reviewApp.controller("ReviewsController", function ReviewsController($scope, ReviewsDataService, $routeParams) {
    $scope.emojisShown = false;
    $scope.classVoted = '';

    ReviewsDataService.getReviews()
        .then(res => {
            $scope.reviews = res.data.reviews;
        })
        .catch(err => {
            console.err("Error: ", err);
        });

    $scope.showReviewDetails = function () {

    };

    $scope.registerVote = function (review) {
        $scope.classVoted = 'voted';
        ReviewsDataService.registerVote(review)
            .then(res => {
              // console.log(res.data.message);
            })
            .catch(err => console.error(err));
    };
});
