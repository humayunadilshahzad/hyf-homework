const express = require("express");

const app = express();
const homeRoute = require("./routes/homeRoute");
const addRoute = require("./routes/addRoute");
const multiplyRoute = require("./routes/multiplyRoute");

require("dotenv").config();
const PORT = process.env.PORT;




app.use((req, res, next) => {
    console.log("middle ware is running ");
    //console.log(req.path);
    next();
});

app.use("/", homeRoute);
app.use("/", addRoute);
app.use("/", multiplyRoute);



app.listen(PORT, console.log(`Server started and listening at port ${PORT}`));