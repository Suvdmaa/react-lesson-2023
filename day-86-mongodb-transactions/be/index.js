const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const transactionRoute = require("./routes/transaction.route");
const productRouter = require("./routes/product.route");
require("dotenv").config();

const PORT = process.env.PORT;
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/transaction", transactionRoute);
app.use("/product", productRouter);

app.get("/", (req, res) => {
  res.status(200).send("<h1>Day 86 MongoDB Transaction</h1>");
});

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_CONNECTION_STRING)
    .then(() => console.log("Database connected succesfully"))
    .catch((error) => console.error(error));
  console.log(`Appilication is running on http://localhost:${PORT}`);
});
