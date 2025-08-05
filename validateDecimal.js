const validateDecimalParam = (req, res, next) => {
    const decimal = parseInt(req.params.decimal, 10);
    if (isNaN(decimal)) {
        return res.status(400).json({ error: "Número decimal inválido" });
    }
    req.decimal = decimal;
    next();
};

module.exports = validateDecimalParam;