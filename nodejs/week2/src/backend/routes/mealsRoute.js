const express = require("express");
//const bodyParser = require("body-parser");
const router = express.Router();
//router.use(bodyParser.json());
const fs = require("fs");
//const data = fs.readFileSync(__dirname + "<file path>");
const meals = JSON.parse(fs.readFileSync(__dirname + "/../data/meals.json"));
const reviews = JSON.parse(fs.readFileSync(__dirname + "/../data/reviews.json"));

router.get("/", (req, res) => {
    if (isEmpty(req.query)) {
        console.log("no query ..therefore all meals sent");
        meals.forEach(meal => {
            meal.reviews = [];
            const r = reviews.filter(review => {
                if (meal.id === review.mealId)
                    return true;
            });
            for (let i = 0; i < r.length; i++)
                meal.reviews.push(r[i]);
        });
        res.send(meals);
    }
    else {
        console.log(req.query);
        if (req.query.hasOwnProperty('limit'))
        //function call
        {
            console.log(`limit : ${req.query.limit}`);
            meals.forEach(meal => {
                meal.reviews = [];
                const r = reviews.filter(review => {
                    if (meal.id === review.mealId)
                        return true;
                });
                for (let i = 0; i < r.length; i++)
                    meal.reviews.push(r[i]);
            });
            res.send(meals.slice(0, parseInt(req.query.limit)));
        }


        else if (req.query.hasOwnProperty('maxPrice'))
        //function call
        {
            console.log(`maxPrice : ${req.query.maxPrice}`);
            const cheapmeals = meals.filter(meal => {
                if (meal.price <= parseInt(req.query.maxPrice))
                    return true;
            });
            cheapmeals.forEach(meal => {
                meal.reviews = [];
                const r = reviews.filter(review => {
                    if (meal.id === review.mealId)
                        return true;
                });
                for (let i = 0; i < r.length; i++)
                    meal.reviews.push(r[i]);
            });
            res.send(cheapmeals);
        }

        else if (req.query.hasOwnProperty('title'))
        //function call
        {
            console.log(`title : ${req.query.title}`);
            const mealsWithTitle = meals.filter(meal => {
                if (meal.title.toUpperCase().includes(req.query.title.toUpperCase()))
                    return true;
            });
            mealsWithTitle.forEach(meal => {
                meal.reviews = [];
                const r = reviews.filter(review => {
                    if (meal.id === review.mealId)
                        return true;
                });
                for (let i = 0; i < r.length; i++)
                    meal.reviews.push(r[i]);
            });
            res.send(mealsWithTitle);
        }


        else if (req.query.hasOwnProperty('createdAfter'))
        //function call
        {
            console.log(`crated after : ${req.query.createdAfter}`);
            const mealsCreatedAfter = meals.filter(meal => {
                if (Date.parse(meal.createdAt) >= Date.parse(req.query.createdAfter))
                    return true;
            });
            mealsCreatedAfter.forEach(meal => {
                meal.reviews = [];
                const r = reviews.filter(review => {
                    if (meal.id === review.mealId)
                        return true;
                });
                for (let i = 0; i < r.length; i++)
                    meal.reviews.push(r[i]);
            });
            res.send(mealsCreatedAfter);
        }

        else
            res.status(400).send("not a valid query.....");


    }
});


// meal with a specific Id 'params'
router.get("/:id", (req, res) => {
    const mealToFind = req.params.id;
    console.log(mealToFind);
    const foundMeal = meals.filter(meal => {
        return meal.id === parseInt(mealToFind);
    });
    foundMeal.forEach(meal => {
        meal.reviews = [];
        const r = reviews.filter(review => {
            if (meal.id === review.mealId)
                return true;
        });
        for (let i = 0; i < r.length; i++)
            meal.reviews.push(r[i]);
    });
    if (foundMeal.length > 0)
        res.send(foundMeal);
    else
        res.status(404).send("Record doesnt exist");
});


// function to see if an object is empty or not
function isEmpty(obj) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop))
            return false;
    }
    return true;
}

module.exports = router;