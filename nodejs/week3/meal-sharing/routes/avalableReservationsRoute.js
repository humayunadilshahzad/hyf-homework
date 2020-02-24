

const express = require("express");
const router = express.Router();

const dotenv = require("dotenv");
const mysql = require("mysql");
dotenv.config();


const { MYSQL_URL } = process.env;
const connection = mysql.createConnection(MYSQL_URL);

// all records from reservations
router.get("/", (req, res) => {
    connection.query(`select id,title,location,max_reservations,total_reservations
    from meal
    join 
    (select meal_id,sum(number_of_guests) as total_reservations
    from reservation
    group by meal_id) as res
    on id=meal_id
    where max_reservations > res.total_reservations
    `, (err, results, fields) => {
        if (err)
            return res.send(err);
        res.json(results);
    });

});




module.exports=router;
