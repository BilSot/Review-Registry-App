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
module.exports = router;
