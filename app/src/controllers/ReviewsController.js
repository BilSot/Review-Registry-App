reviewApp.controller("ReviewsController", function ReviewsController($scope, ReviewsDataService, $routeParams){
    $scope.title = "Here should be the list with all the reviews";

    ReviewsDataService.getReviews()
        .then(res => {
            $scope.reviews = res.data.reviews;
        })
        .catch(err => {
            console.err("Error: ", err);
        });

    $scope.showReviewDetails = function(){
        alert("Hello");
    };
});
