reviewApp.controller("NewFeedbackController", ['$scope', function NewFeedbackController($scope){
    $scope.title = "Here should be the new feedback form";
    $scope.emojisShown = false;

    $scope.showEmojis = function(){
        $scope.emojisShown = true;
    };

    $scope.hideEmojis = function(){
        $scope.emojisShown = false;
    };
}]);
