// calculator using body object 

const express = require("express");
const router = express.Router();

router.get("/calculator", (req, res) => {
  
    const { num1, num2, method } = req.body;
//    console.log(req.body);
    res.send(` ${calculate(method, num1, num2)}`);

});

function calculate(operation, num1, num2) {
    if (operation == "sum" || operation == "add")
        return "sum =" + (parseInt(num1) + parseInt(num2));
    else if (operation === "multiply" || operation === "product")
        return "product =" + (parseInt(num1) * parseInt(num2));
    else if (operation === "minus" || operation === "subtract")
        return "difference =" + (parseInt(num1) - parseInt(num2));
    else if (operation === "divide")
        return "quotient =" + (parseInt(num1) / parseInt(num2));
    else
        return "Method not suported";
}

module.exports = router;