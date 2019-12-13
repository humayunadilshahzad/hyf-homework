
const express = require("express");
const router = express.Router();
const fs = require("fs");
// //const data = fs.readFileSync(__dirname + "<file path>");
//const meals = JSON.parse(fs.readFileSync(__dirname + "/data/meals.json"));
const reviews = JSON.parse(fs.readFileSync(__dirname + "/../data/reviews.json"));

router.get("/",(req,res)=>{
res.send(reviews);
});

//route to serd a specific reservation through Id'params'
router.get("/:id", (req, res) => {
    const reviewToFind = req.params.id;
    console.log(reviewToFind);
    const foundReview= reviews.filter(review => {
        return review.id === parseInt(reviewToFind);
    });
    res.send(foundReview);
});

module.exports=router;



