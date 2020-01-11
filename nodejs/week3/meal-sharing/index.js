const express = require("express");
const dotenv = require("dotenv");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const mealsRouter = require("./routes/mealsRoute");
const reviewsRouter = require("./routes/reviewRoute");
const reservationRouter = require("./routes/reservationRoute");
const availableReservationsRouter = require("./routes/avalableReservationsRoute")

const app = express();
const PORT = 3000;
dotenv.config();


const { MYSQL_URL } = process.env;

const connection = mysql.createConnection(MYSQL_URL);

app.use(bodyParser.json());

app.use('/api/meals', mealsRouter);
app.use('/api/reviews', reviewsRouter);
app.use('/api/reservations', reservationRouter);
app.use('/api/availabelreservations', availableReservationsRouter);


app.listen(PORT, () => {
    console.log(`server is listening at port ${PORT}`);
    connection.connect(err => {
        if (err)
            console.log(`Error connection : ${err}`);
        else
            console.log(`Conection Successful`);
    })

});