reviewApp.controller("NewFeedbackController", ['$scope', '$location', 'ReviewsDataService', '$filter', function NewFeedbackController($scope, $location, ReviewsDataService, $filter) {
    let fooBar = 0;
    $scope.review = {};
    $scope.selectedStars = 0;
    $scope.emojis = [ '&#x1F620;', '&#x1F61E;', '&#x1F610;', '&#x1F60A;', '&#x1F603;'];
    $scope.emoji = '';
    $scope.invalidSubmit = false;
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
            name: 'title',
            required: true,
            type: 'text',
            placeholder: 'Title',
            label: 'Title of your review'
        },
        {
            name: 'content',
            required: true,
            type: 'textarea',
            placeholder: 'Please try to be nice and constructive',
            label: 'Your review'
        }
    ];

    $scope.submitForm = function (review) {
        if ($scope.selectedStars === 0) {
            $scope.invalidSubmit = true;
            //Zero stars??? We cry cry cry!
            $scope.emoji = '&#x1F62D;';
            // alert("Please give us at least one star...");
            return;
        }
        let newReview = {};
        newReview.user = {};
        newReview.user.name = review.name;
        newReview.user.email = review.email;
        newReview.title = review.title;
        newReview.content = review.content;
        newReview.date = new Date();
        newReview.rating = $scope.selectedStars;
        newReview.votes = 0;
        ReviewsDataService.submitReview(newReview)
            .then(res => {
                if(res.status === 200) {
                    $location.url('/reviews');
                }
            })
            .catch(err => {
                alert("Your review can not be submitted at the moment. Please try again later");
                console.error(err);
            });
    };

    $scope.showEmojis = function (hoveredId) {
        $scope.emoji = $scope.emojis[hoveredId - 1];
    };

    $scope.setStarRate = function (selectedId) {
        $scope.emoji = $scope.emojis[selectedId - 1];
        $scope.invalidSubmit = false;
        $scope.selectedStars = selectedId;
    };

    $scope.hideEmojis = function () {
        $scope.emoji = '';
    };
}]);
