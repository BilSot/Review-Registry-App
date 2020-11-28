reviewApp.directive('starRating', function ($compile) {
    return {
        restrict: 'E',
        template: '<div></div>',
        replace: true,
        scope: {
            'hideEmojisDir': '&',
            'rating': '='
        },
        link: function (scope, element) {
            scope.rating = 0;
            let el = angular.element('<span/>');
            let max = 5;
            let value = 0;
            let stars = [];
            for (let i = 1; i <= max; i++) {
                let star = angular.element('<span data-id="' + i + '" class="glyphicon large glyphicon-star-empty" ng-click="rating=' + i + '" ng-mouseenter="hover('+ i + ')" ng-mouseleave="hideEmojisDir()"></span>');
                stars.push(star);
                el.append(star);
                star.bind('mouseover', function () {
                    this.classList.remove('glyphicon-star-empty');
                    this.classList.add('glyphicon-star');
                    value = angular.element(this).attr('data-id');
                        updateStars(value);
                }).bind('mouseout', function () {
                    updateStars(value);
                });
            }

            function updateStars(val) {
                for (let j = 0; j < max; j++) {
                    if (stars[j].attr('data-id') <= val) {
                        stars[j].removeClass("glyphicon-star-empty");
                        stars[j].addClass("glyphicon-star");
                    } else {
                        stars[j].removeClass("glyphicon-star");
                        stars[j].addClass("glyphicon-star-empty");
                    }
                }
            }

            el.bind('mouseout', function () {
                updateStars(scope.rating);
            });
            $compile(el)(scope);
            element.append(el);
        },
        controller: ['$scope', '$rootScope', function StarRatingController($scope) {
            $scope.hover = function(id){
                $scope.$parent.hoveredId = id;
                $scope.$parent.showEmojis();
            };
        }]
    };
});
