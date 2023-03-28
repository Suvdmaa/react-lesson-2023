const { Router } = require("express");
const { createProducts } = require("../controllers/product.controller");

const productRouter = Router();

productRouter.post("/create", createProducts);

module.exports = productRouter;
