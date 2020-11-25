reviewApp.factory("ReviewsDataService", function($http){
    return {
        getReviews: function(){
            return $http({
                method: 'GET',
                url: 'api/reviews'
            });
        },

        getReview: function(reviewId){

        }
    };
});
