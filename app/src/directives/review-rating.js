reviewApp.directive('reviewRating', function ($compile){
   return{
       restrict: 'E',
       replace: true,
       template: '<div class="reviewRating"></div>',
       scope: {
           'rating': '='
       },
       link: function(scope, element){
           let star = angular.element('<span></span>');
           for(let i = 0; i < 5; i++){
               let glyphiconClass = i < scope.rating ? 'glyphicon-star' : 'glyphicon-star gray';
               let spanElem = angular.element('<span class="glyphicon small"></span>');
               spanElem.addClass(glyphiconClass);
               star.append(spanElem);
           }

           // $compile(star)(scope);
           element.append(star);
       }
   };
});
