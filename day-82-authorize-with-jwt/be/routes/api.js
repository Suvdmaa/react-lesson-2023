const express = require("express");
const apiRouter = express.Router();
const auth = require("../middleware/auth");

apiRouter.post("/protected", auth, (request, response, next) => {
  response.status(200).json({ data: "Successfully got the protected route" });
});

apiRouter.post("/unprotected", auth, (request, response, next) => {
  response.status(200).json({ data: "Successfully got the protected route" });
});

module.exports = apiRouter;
