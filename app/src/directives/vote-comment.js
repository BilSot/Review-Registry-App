reviewApp.directive('voteComment', function(){
    return{
        restrict: 'E',
        replace: true,
        scope: {
            'id': '@',
            'comment': '=',
            'registerCommentVote': '&'
        },
        templateUrl: '../templates/vote-comment.html',
        link: function(scope, element){
            scope.addVote = function(comment, type) {
                if (!element.attr('isVoted') || element.attr('isVoted') !== 'true') {
                    if (type === 'upvote') {
                        comment.upvotes += 1;
                        element.find(".commentVote[id^='upvote']").addClass('thumbUp');
                    } else if (type === 'downvote') {
                        comment.downvotes += 1;
                        element.find(".commentVote[id^='downvote']").addClass('thumbDown');

                    }
                    element.addClass('voted');
                    element.attr('isVoted', 'true');
                    this.registerCommentVote({comment: comment});
                };
            };
        }
    };
});
