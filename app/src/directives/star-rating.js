reviewApp.directive('starRating', function ($compile) {
    return {
        restrict: 'E',
        template: '<div class="starRatingWidget"></div>',
        replace: true,
        scope: {
            onClick: '&'
        },
        link: function (scope, element) {
            scope.rating = 0;
            let parentSpan = angular.element('<span/>');
            let max = 5;
            let value = 0;
            let stars = [];
            for (let i = 1; i <= max; i++) {
                let star = angular.element('<span id="star' + i + '" data-id="' + i + '" class="glyphicon large glyphicon-star-empty" ng-click="starSelect(' + i + ')" ng-mouseenter="hover('+ i + ')" ng-mouseleave="mouseLeave()"></span>');
                stars.push(star);
                parentSpan.append(star);

                star.bind('mouseover', function () {
                    this.classList.remove('glyphicon-star-empty');
                    this.classList.add('glyphicon-star');
                    value = angular.element(this).attr('data-id');
                    scope.updateStars(value);
                }).bind('mouseout', function () {
                    scope.updateStars(value);
                });
            }

            scope.updateStars = function(val) {
                for (let j = 0; j < max; j++) {
                    if (stars[j].attr('data-id') <= val) {
                        stars[j].removeClass("glyphicon-star-empty");
                        stars[j].addClass("glyphicon-star");
                    } else {
                        stars[j].removeClass("glyphicon-star");
                        stars[j].addClass("glyphicon-star-empty");
                    }
                }
            };

            parentSpan.bind('mouseout', function () {
                scope.updateStars(scope.rating);
            });
            $compile(parentSpan)(scope);
            element.append(parentSpan);
        },
        controller: ['$scope', '$rootScope', function StarRatingController($scope) {
            $scope.hover = function(id){
                if ($scope.rating === 0) {
                    $scope.$parent.showEmojis(id);
                }
            };

            $scope.mouseLeave = function () {
                if ($scope.rating === 0) {
                    $scope.$parent.hideEmojis();
                }
            };

            $scope.starSelect = function(starId){
                $scope.onClick({starId:starId});
                $scope.rating = starId;
                $scope.updateStars(starId);
            };
        }]
    };
});
