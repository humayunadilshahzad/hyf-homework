const express = require("express");
const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
});
router.get("/multiply/:id1&:id2", (req, res) => {
    const { id1, id2 } = req.params;
    console.log(req.params);

    res.send(`Product = ${parseInt(id1) * parseInt(id2)}`);
});

router.get("/multiply/", (req, res) => {
    const { num1, num2 } = req.query;
    console.log(req.query);

    res.send(`Product =${parseInt(num1) * parseInt(num2)}`);
});

module.exports=router