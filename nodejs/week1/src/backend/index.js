const express = require("express");

const app = express();
const fs = require("fs");
//const data = fs.readFileSync(__dirname + "<file path>");
const meals = JSON.parse(fs.readFileSync(__dirname + "/data/meals.json"));
const reviews = JSON.parse(fs.readFileSync(__dirname + "/data/reviews.json"));
const reservations = JSON.parse(fs.readFileSync(__dirname + "/data/reservations.json"));


app.get("/", (req, res) => {
    res.send("bismillah");
});

// meals
app.get("/meals", (req, res) => {
    meals.forEach(meal => {
        meal.reviews = [];
        const r = reviews.filter(review => {
            if (meal.id === review.mealId)
                return true;
        });
        meal.reviews.push(r);
        //for (let i = 0; i < r.length; i++)
        //  meal.reviews.push(r[i]);
    });
    res.send(meals);
});

// one random meal
app.get("/meal", (req, res) => {
    const randomMeal = meals[Math.floor(Math.random() * meals.length)];
    res.send(randomMeal);
});

//cheap-meals
app.get("/cheap-meals", (req, res) => {
    const cheapmeals = meals.filter(meal => {
        if (meal.price < 70)
            return meal;
    });
    res.send(cheapmeals);
});

// large-meals
app.get("/large-meals", (req, res) => {
    const largemeals = meals.filter(meal => {
        if (meal.maxNumberOfGuests >= 10)
            return meal;
    });
    res.send(largemeals);
});

// reviews
app.get("/reviews", (req, res) => {
    res.send(reviews);
});

// reservations
app.get("/reservations", (req, res) => {
    res.send(reservations);
});

process.env.port = 3500;
const port = process.env.PORT || 4000;
app.listen(port, () => console.log("server started and listening at port " + port));