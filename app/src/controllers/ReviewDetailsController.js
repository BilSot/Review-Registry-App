reviewApp.controller('ReviewDetailsController', ['$scope', 'ReviewsDataService', '$routeParams', '$location', function ReviewDetailsController($scope, ReviewsDataService, $routeParams, $location){
    $scope.ready = false;
    $scope.addComment = false;

    ReviewsDataService.getReview($routeParams.id)
        .then(res => {
            $scope.review = res.data.review;
            $scope.comments = res.data.comments;
            $scope.ready = true;
        })
        .catch(err => {

        });

    $scope.toggleForm = function(){
        $scope.addComment = !$scope.addComment;
    };

    $scope.submitCommentForm = function(comment){
        comment.date = new Date();
        comment.review_id = parseInt($routeParams.id);
        ReviewsDataService.submitComment(comment)
            .then(res => {
                console.log(res.data.reviewComments);
                if(res.status === 200){
                    $scope.addComment = false;
                    $scope.comments = res.data.reviewComments;
                    $scope.comment = {};
                }
            })
            .catch(err => {
                alert("Your comment can not be submitted at the moment. Please try again later");
                $location.url('/reviews');
            });
    };
}]);
