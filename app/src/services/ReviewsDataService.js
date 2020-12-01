reviewApp.factory("ReviewsDataService", function ($http) {
    return {
        getReviews: function () {
            return $http({
                method: 'GET',
                url: 'api/reviews'
            });
        },

        getReview: function (reviewId) {
            return $http({
                method: 'GET',
                url: `api/reviews/${reviewId}`
            });
        },

        submitReview: function (review) {
            return $http({
                method: 'POST',
                url: 'api/reviews',
                data: review,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        },

        submitComment: function(comment){
            return $http({
                method: 'POST',
                url: 'api/comments',
                data: comment,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        },

        registerVote: function(review){
            console.log(review);
            return $http({
                method: 'PUT',
                url: 'api/reviews',
                data: review
            });
        }
    };
});
