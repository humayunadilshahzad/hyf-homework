
const express = require("express");
const router = express.Router();
const fs = require("fs");
// //const data = fs.readFileSync(__dirname + "<file path>");
//const meals = JSON.parse(fs.readFileSync(__dirname + "/data/meals.json"));
const reservations = JSON.parse(fs.readFileSync(__dirname + "/../data/reservations.json"));

router.get("/",(req,res)=>{
res.send(reservations);
});

module.exports=router;



