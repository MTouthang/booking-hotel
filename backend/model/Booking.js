const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const BookingSchema = new mongoose.Schema({
  checkedIn: {
    type: String,
    required: true,
  },
  checkedOut: {
    type: String,
    required: true,
  },
  user: {
    type: ObjectId,
    ref: "User",
  },
  hotel: {
    type: ObjectId,
    ref: "Hotels",
  },
});

module.exports = mongoose.model("Booking", BookingSchema);
