const express = require("express");
const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
});

router.get("/divide/:id1&:id2", (req, res) => {
    const { id1, id2 } = req.params;
    console.log(req.params);

    res.send(`dividing factor=${parseInt(id1) / parseInt(id2)}`);
});

router.get("/divide/", (req, res) => {
    const { num1, num2 } = req.query;
    console.log(req.query);

    res.send(`dividing factor=${parseInt(num1) / parseInt(num2)}`);
});

module.exports=router;