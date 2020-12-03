reviewApp.controller('ReviewDetailsController', ['$scope', 'ReviewsDataService', '$routeParams', '$location', '$window', function ReviewDetailsController($scope, ReviewsDataService, $routeParams, $location, $window) {
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
            $location.url(`/${err.status}`);
        });

    $scope.addCommentVote = function (comment) {
        ReviewsDataService.registerCommentVote(comment)
            .then(res => {

            })
            .catch(err => {
                alert("Your comment can not be submitted at the moment. Please try again later");
                $location.url('/reviews');
            });
    };

    $scope.toggleForm = function () {
        $scope.addComment = !$scope.addComment;
    };

    $scope.submitForm = function (comment) {
        let newComment = {};
        newComment.user = {};
        newComment.user.name = comment.name;
        newComment.user.email = comment.email;
        newComment.content = comment.content;
        newComment.date = new Date();
        newComment.review_id = parseInt($routeParams.id);
        newComment.upvotes = 0;
        newComment.downvotes = 0;
        ReviewsDataService.submitComment(newComment)
            .then(res => {
                if (res.status === 200) {
                    $scope.addComment = false;
                    $scope.comments = res.data.reviewComments;
                    $scope.comment = {};
                }
            })
            .catch(err => {
                $location.url(`/${err.status}`);
            });
    };
}]);
