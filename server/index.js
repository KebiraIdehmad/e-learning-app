require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const courseroutes = require("./routes/courseroutes");
const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the Database");
  })
  .catch((err) => console.log(err));

app.use(cors());
app.use(courseroutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
