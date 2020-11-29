const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/reviews', (req, res, next) => {
    let reviews = fs.readFileSync('app/data/reviews.json', 'utf-8');
    console.log("Reviews: ", JSON.parse(reviews).reviews);
    res.setHeader('Content-Type', 'application/json');
    res.send(reviews);
    res.end();
});

router.get('/reviews/:id', (req, res, next) => {
    let reviews = fs.readFileSync('app/data/reviews.json', 'utf-8');
    res.setHeader('Content-Type', 'application/json');
    const reviewsArray = JSON.parse(reviews).reviews;
    const commentsArray = JSON.parse(reviews).comments;
    let requestedReview = {};

    for (const review of reviewsArray) {
        if (review.id === parseInt(req.params.id)) {
            requestedReview = review;
        }
    }

    let reviewComments = commentsArray.filter(comment => {
        return comment.review_id === parseInt(req.params.id);
    });

    let response = {
        review: requestedReview,
        comments: reviewComments
    };

    res.send(response);
    res.end();
});

router.post('/reviews', (req, res, next) => {
    let reviews = fs.readFileSync('app/data/reviews.json', 'utf-8');
    const reviewsArray = JSON.parse(reviews).reviews;
    const commentsArray = JSON.parse(reviews).comments;
    let lastId = reviewsArray.length > 0 ? reviewsArray[reviewsArray.length - 1].id : 0;
    let newReview = req.body;
    newReview.id = lastId + 1;
    reviewsArray.push(newReview);


    fs.writeFile('app/data/reviews.json',
        JSON.stringify({
            "reviews": reviewsArray,
            "comments": commentsArray
        }),
        (err) => {
        if (err) next(err);
        res.send({message: "Review saved"});
    });

});

router.post('/comments', (req, res, next) => {
    let reviews = fs.readFileSync('app/data/reviews.json', 'utf-8');
    const reviewsArray = JSON.parse(reviews).reviews;
    const commentsArray = JSON.parse(reviews).comments;
    let lastId = commentsArray.length > 0 ? commentsArray[commentsArray.length - 1].id : 0;
    let newComment = req.body;
    newComment.id = lastId + 1;
    commentsArray.push(newComment);

    let reviewComments = commentsArray.filter(comment => {
        return comment.review_id === parseInt(req.body.review_id);
    });

    fs.writeFile('app/data/reviews.json',
        JSON.stringify({
            "reviews": reviewsArray,
            "comments": commentsArray
        }),
        (err) => {
            if (err) next(err);
            res.send({reviewComments});
        });
});


module.exports = router;
