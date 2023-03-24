const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const adminRouter = require("./routes/admin-api");
const apiRouter = require("./routes/api");
require("dotenv").config();

const PORT = process.env.PORT;
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;

const app = express();
app.use(express.json());
app.use(cors());

app.use("/admin", adminRouter);
app.use("/api", apiRouter);

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_CONNECTION_STRING)
    .then(() => console.log("Database connected succesfully"))
    .catch((error) => console.error(error));
  console.log(`Appilication is running on http://localhost${PORT}`);
});
