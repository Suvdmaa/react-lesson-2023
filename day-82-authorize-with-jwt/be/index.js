const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const adminRouter = require("./routes/admin-api");
const apiRouter = require("./routes/api");

const app = express();
const PORT = 8080;
app.use(express.json());
app.use(cors());

const MONGO_CONNECTION_STRING =
  "mongodb+srv://blackenkhboldsuvdmaa:k7zDjv%40K!t%40TsF@suvd.mba0zd4.mongodb.net/test";

app.use(adminRouter);
app.use(apiRouter);

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_CONNECTION_STRING)
    .then(() => console.log("Database connected succesfully"))
    .catch((error) => console.error(error));
  console.log(`Appilication is running on http://localhost${PORT}`);
});
