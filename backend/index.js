const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

require("dotenv").config();

// import routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const hotelRoutes = require("./routes/hotel");
const bookingRoutes = require("./routes/booking");

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
app.use("/api", userRoutes);
app.use("/api", hotelRoutes);
app.use("/api", bookingRoutes);

app.listen(port, () => {
  console.log(`Server up and Running at: ${port}`);
});
