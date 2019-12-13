const express = require("express");
const moment = require("moment");

//const bodyParser = require("body-parser");

const homeRoute = require("./routes/homeRoute");
const mealsRoute = require("./routes/mealsRoute");
const randomMealsRoute = require("./routes/randomealRoute");
const cheap_mealsRoute = require("./routes/cheap-mealsRoute");
const reviewsRoute = require("./routes/reviewsRoute");
const reservationsRoute = require("./routes/reservationsRoute");
const largemealsRoute = require("./routes/large-MealsRoute");

const app = express();
//app.use(bodyParser.json());
app.use((req, res, next) => {

    console.log(`At ${moment()} a request was recieved for resource at path ${req.path}`);
        next();
});

app.use("/", homeRoute);
app.use("/meals", mealsRoute);
app.use("/reviews", reviewsRoute);
app.use("/reservations", reservationsRoute);


//  1 random meal response 
app.use("/meal", randomMealsRoute);

// resoponding cheap meals with hard coded price values 
app.use("/cheap-meals", cheap_mealsRoute);

// responding large meals with hard coded number of guests
app.use("/large-meals", largemealsRoute);


//app.use("/meals",mealsRoute);

// meal with a specific Id
//app.get("/meals/:id", (req, res) => {
// const mealsArr = []
//  const mealToFind=req.params.id;
//console.log(req.params.id);
//  meals.forEach(meal => {
//      meal.reviews = [];
//      const r = reviews.filter(review => {
//          if (meal.id === review.mealId)
//              return true;
//      });
//      // meal.reviews.push(r);
//      for (let i = 0; i < r.length; i++)
//          meal.reviews.push(r[i]);
//  });
//res.send(mealToFind);

//});

process.env.port = 3500;
const port = process.env.PORT || 4000;
app.listen(port, () => console.log("server started and listening at port " + port));