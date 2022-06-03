const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
  hotel: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "booked",
  },
  bookedDate: {
    type: String,
    required: true,
  },
  booked: {
    type: [],
  },
});

module.exports = mongoose.model("Book", bookingSchema);
