const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const homeRoute = require("./routes/homeRoute");
const addRoute = require("./routes/addRoute");
const multiplyRoute = require("./routes/multiplyRoute");
const subtractRoute = require("./routes/subtractRoute");
const divideRoute = require("./routes/divideRoute");

const calculator=require("./routes/calculator");

require("dotenv").config();
const PORT = process.env.PORT;



app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log("middle ware is running ");
    //console.log(req.path);
    next();
});

app.use("/", homeRoute);
app.use("/", addRoute);
app.use("/", multiplyRoute);
app.use("/", subtractRoute);
app.use("/", divideRoute);
app.use("/",calculator);



app.listen(PORT, console.log(`Server started and listening at port ${PORT}`));