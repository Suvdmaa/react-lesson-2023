const { Router } = require("express");
const { getNeighborhoods } = require("../controllers/neighborhood.controller");

const neighRouter = Router();

neighRouter.get("/list", getNeighborhoods);

module.exports = neighRouter;
