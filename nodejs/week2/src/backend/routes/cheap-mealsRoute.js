const express = require("express");
const router = express.Router();

const fs = require("fs");
//const data = fs.readFileSync(__dirname + "<file path>");
const meals = JSON.parse(fs.readFileSync(__dirname + "/../data/meals.json"));

const reviews = JSON.parse(fs.readFileSync(__dirname + "/../data/reviews.json"));

router.get("/", (req, res) => {
    const cheapmeals = meals.filter(meal => {
        if (meal.price < 70)
            return true;
    });
    cheapmeals.forEach(meal => {
        meal.reviews = [];
        const r = reviews.filter(review => {
            if (meal.id === review.mealId)
                return true;
        });
        // meal.reviews.push(r);
        for (let i = 0; i < r.length; i++)
            meal.reviews.push(r[i]);
    });
    res.send(cheapmeals);
});
module.exports = router;