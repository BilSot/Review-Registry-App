reviewApp.controller("NewFeedbackController", ['$scope', '$location', 'ReviewsDataService', '$filter', function NewFeedbackController($scope, $location, ReviewsDataService, $filter) {
    $scope.emojisShown = false;
    $scope.review = {};
    $scope.selectedStars = 0;
    $scope.emojis = ['&#x1F620;', '&#x1F61E;', '&#x1F610;', '&#x1F60A;', '&#x1F603;'];
    $scope.emoji = '';
    $scope.hoveredId = 0;
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
    $scope.showEmojis = function () {
        $scope.emoji = $scope.emojis[$scope.hoveredId - 1];
        $scope.emojisShown = true;
    };

    $scope.hideEmojis = function () {
        $scope.hoveredId = 0;
        $scope.emoji = '';
        $scope.emojisShown = false;
    };
}]).directive('test', function () {
    return {
        restrict: 'A',
        link: function (scope, element) {
            let offsetLeft = $('.starRatingWidget').offset();
            let starsWidth = $('.glyphicon').css('width');
            let emojiMarginLeft = offsetLeft.left + 'px';
            $('.emojis').css({'margin-left': emojiMarginLeft});
            // console.log(parseInt($('.container').css('width')) / 4 + 'px');
            let feedbackFormMarginLeft = parseInt($('.container').css('width')) / 4;
            $('.feedbackFormWidget').css({left: feedbackFormMarginLeft, position: 'relative'});
            let buttonLeftPosition = parseInt($('.feedbackFormWidget').css('width')) / 2;
            $('.feedbackFormWidget button').css({left: buttonLeftPosition, position: 'relative'});
        }
    };
});
