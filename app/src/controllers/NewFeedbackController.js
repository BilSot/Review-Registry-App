reviewApp.controller("NewFeedbackController", ['$scope', '$location', '$http', '$filter', function NewFeedbackController($scope, $location, $http, $filter) {
    $scope.title = "Here should be the new feedback form";
    $scope.emojisShown = false;
    $scope.review = {};
    $scope.selectedStars = 0;
    $scope.emojis = ['&#x1F620;', '&#x1F61E;', '&#x1F610;', '&#x1F60A;', '&#x1F603;'];
    $scope.emoji = '';
    $scope.hoveredId = 0;

    $scope.submitForm = function (review) {
        if ($scope.selectedStars === 0) {
            alert("Please give us at least one star...");
            return;
        }
        review.date = $filter('date')(new Date(), 'dd-MM-yyyy');
        review.rating = $scope.selectedStars;
        console.log("Form submitted: ", review);
        $location.url('/reviews');
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
            $('.emojis').css({'margin-left': '50px'});
        }
    };
});
