reviewApp.directive('userCommunicationForm', function (){
    return{
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: '../templates/user-communication-form.html',
        scope: {
            'communication': '=',
            'fields': '='
        },
        controller: ['$scope', function($scope){
            $scope.submitForm = function(communicationObj){
                $scope.$parent.submitForm(communicationObj);
            };
        }]
    };
});
