reviewApp.controller("ReviewsController", function ReviewsController($scope, ReviewsDataService, $routeParams){
    $scope.title = "Here should be the list with all the reviews";
    $scope.emojisShown = false;

    ReviewsDataService.getReviews()
        .then(res => {
            $scope.reviews = res.data.reviews;
        })
        .catch(err => {
            console.err("Error: ", err);
        });

    $scope.showReviewDetails = function(){

    };

    /*$scope.showEmojis = function(){
        $scope.emojisShown = true;
    };

    $scope.hideEmojis = function(){
        $scope.emojisShown = false;
    };*/
});
