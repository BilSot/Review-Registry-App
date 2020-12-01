reviewApp.controller('ReviewDetailsController', ['$scope', 'ReviewsDataService', '$routeParams', '$location', function ReviewDetailsController($scope, ReviewsDataService, $routeParams, $location){
    $scope.ready = false;
    $scope.addComment = false;
    $scope.comment = {};
    $scope.fields = [
        {
            name: 'name',
            required: true,
            type: 'text',
            placeholder: 'Name',
            label: 'Your name'
        },
        {
            name: 'email',
            required: true,
            type: 'text',
            placeholder: 'Email address',
            label: 'Your email address'
        },
        {
            name: 'content',
            required: true,
            type: 'textarea',
            placeholder: 'Please try to be nice and constructive',
            label: 'Your comment'
        }
    ];

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

    $scope.submitForm = function(comment){
        let newComment = {};
        newComment.user = {};
        newComment.user.name = comment.name;
        newComment.user.email = comment.email;
        newComment.content = comment.content;
        newComment.date = new Date();
        newComment.review_id = parseInt($routeParams.id);
        ReviewsDataService.submitComment(newComment)
            .then(res => {
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
