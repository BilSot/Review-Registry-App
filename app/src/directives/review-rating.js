reviewApp.directive('reviewRating', function ($compile){
   return{
       restrict: 'E',
       replace: true,
       template: '<p></p>',
       scope: {
           'rating': '='
       },
       link: function(scope, element){
           let star = angular.element('<span></span>');
           for(let i = 0; i < scope.rating; i++){
               let spanElem = angular.element('<span class="glyphicon glyphicon-star" id="'+ i+ '"></span>');
               star.append(spanElem);
           }

           // $compile(star)(scope);
           element.append(star);
       }
   };
});
