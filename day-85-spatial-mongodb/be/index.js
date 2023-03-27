const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const restaurantApi = require("./routes/restaurants.routes");
const neighRouter = require("./routes/neighborhoods.routes");

const PORT = process.env.PORT;
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;

const app = express();
app.use(express.json());
app.use(cors());

app.use("/restaurant", restaurantApi);
app.use("/neighborhood", neighRouter);

app.get("/", (request, response) => {
  response.status(200).send(`<h1>Day-85</h1>`);
});

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_CONNECTION_STRING)
    .then(() => console.log("Database connected succesfully"))
    .catch((error) => console.error(error));
  console.log(`Appilication is running on http://localhost${PORT}`);
});
