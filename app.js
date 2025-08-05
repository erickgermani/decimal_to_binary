const express = require("express");
const validateDecimalParam = require("./validateDecimal");
const app = express();

app.get("/to-binary/:decimal", validateDecimalParam, (req, res) => {
    const binary = req.decimal.toString(2);
    res.json({ decimal: req.decimal, binary });
});

module.exports = app;