reviewApp.directive('feedbackForm', function(){
    return{
        restrict: 'E',
        replace: true,
        templateUrl: '../../templates/feedback-form.html',
        controller: ['$scope', '$http', '$location', function test ($scope, $http, $location){
            $scope.review = {};

            $scope.submitForm = function(review){
                console.log("Form submitted: ", review);
                $location.url('/reviews');
            };
        }]
    };
});
