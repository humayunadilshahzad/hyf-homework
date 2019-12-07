const express = require("express");
const router = express.Router();

const fs = require("fs");
//const data = fs.readFileSync(__dirname + "<file path>");
const meals = JSON.parse(fs.readFileSync(__dirname + "/../data/meals.json"));
const reviews = JSON.parse(fs.readFileSync(__dirname + "/../data/reviews.json"));

router.get("/", (req, res) => {
    const randomMeal = meals[Math.floor(Math.random() * meals.length)];
    randomMeal.reviews = []
    const r = reviews.filter(review => {
        if (randomMeal.id === review.mealId)
            return true;
    });
    for (let i = 0; i < r.length; i++)
        randomMeal.reviews.push(r[i]);
    res.send(randomMeal);
});
module.exports = router;

