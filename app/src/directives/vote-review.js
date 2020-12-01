reviewApp.directive('voteReview', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '../templates/vote-review.html',
        scope: {
            'count': '=',
            'review': '=',
            'id': '@'
        },
        link: function (scope, element) {
            scope.upvote = function (review) {
                if (!element.attr('isVoted') || element.attr('isVoted') !== 'true') {
                    let newVote = scope.count + 1;
                    review.votes = newVote;
                    element.addClass('upvoted');
                    element.attr('isVoted', 'true');
                    scope.$parent.registerVote(review);
                }
            };
            scope.downvote = function (review) {
                if (!element.attr('isVoted') || element.attr('isVoted') !== 'true') {
                    let newVote = scope.count - 1;
                    review.votes = newVote;
                    element.addClass('downvoted');
                    element.attr('isVoted', 'true');
                    scope.$parent.registerVote(review);
                }
            };
        }
    };
});
