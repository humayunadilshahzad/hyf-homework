const express = require("express");

const homeRoute = require("./routes/homeRoute");
const mealsRoute = require("./routes/mealsRoute");
const randomMealsRoute = require("./routes/randomealRoute");
const cheap_mealsRoute = require("./routes/cheap-mealsRoute");
const reviewsRoute=require("./routes/reviewsRoute");
const reservationsRoute=require("./routes/reservationsRoute");
const largemealsRoute=require("./routes/large-MealsRoute");

const app = express();

app.use("/", homeRoute);
app.use("/meals",mealsRoute);
app.use("/cheap-meals",cheap_mealsRoute);
app.use("/meal",randomMealsRoute);
app.use("/reviews",reviewsRoute);
app.use("/reservations",reservationsRoute);
app.use("/large-meals",largemealsRoute);


process.env.port = 3500;
const port = process.env.PORT || 4000;
app.listen(port, () => console.log("server started and listening at port " + port));