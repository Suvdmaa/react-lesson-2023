const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const todoRouter = require("./routes/todo-routes");
const categoryRouter = require("./routes/category-routes");

const app = express();
const PORT = 8080;
const MONGO_CONNECTION_STRING =
  "mongodb+srv://blackenkhboldsuvdmaa:k7zDjv%40K!t%40TsF@suvd.mba0zd4.mongodb.net/test";

app.use(express.json());
app.use(cors());
app.use("/todo", todoRouter);
app.use("/category", categoryRouter);

app.get("/", (request, response) => {
  response.status(200).send("<h1>Day-81 Insert/Update/Delete Many</h1>");
});

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_CONNECTION_STRING)
    .then(() => console.log("Database connected succesfully"))
    .catch((error) => console.error(error));
  console.log(`Application running on http://localhost:${PORT}`);
});
