const express = require("express");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/ErrorMiddleware");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 8000;
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDB();
app.use("/user", require("./routes/userRoute"));
app.use(cors());

app.use(errorHandler);

app.listen(port, () => console.log(`Start at port ${port}`));
