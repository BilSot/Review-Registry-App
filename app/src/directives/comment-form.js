reviewApp.directive('commentForm', function(){
    return{
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: '../templates/comment-form.html'
    };
});
