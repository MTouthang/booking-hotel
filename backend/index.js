const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookie = require("cookie-parser");
require("dotenv").config();

// import routes
const authRoutes = require("./routes/auth");
const cookieParser = require("cookie-parser");

const port = process.env.PORT;
const app = express();

//DB
mongoose
  .connect(process.env.DB)
  .then(() => console.log("BD connected successfully!"))
  .catch((err) => console.log(err));

// middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

//routes
app.use("/api", authRoutes);

app.listen(port, () => {
  console.log(`Server up and Running at: ${port}`);
});
