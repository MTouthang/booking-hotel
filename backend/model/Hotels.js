const mongoose = require("mongoose");
const schema = mongoose.Schema;

const hotelSchema = new schema(
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
    prices: {
      type: Number,
      required: true,
      trim: true,
    },
    photo: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Hotels", hotelSchema);
