const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const hotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    description: {
      type: String,
      trim: true,
      required: true,
      maxlength: 500,
    },

    types: {
      type: String,
    },
    dailyRate: {
      type: String,
      trim: true,
    },
    photo: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Hotels", hotelSchema);
