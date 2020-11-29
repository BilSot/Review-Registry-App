reviewApp.directive('reviewThumbnail', function(){
    return{
        restrict: 'E',
        templateUrl: '../templates/review-thumbnail.html',
        scope: {
            'review': '='
        }
    };
});
