const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
const crypto = require("crypto");
const Booking = require("./Booking");
const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    encrypted_password: {
      type: String,
      required: true,
    },
    salt: String,
    role: {
      type: Number,
      default: 0,
    },
    listOfBooking: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);
// mongoose virtual
userSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = uuidv4();
    this.encrypted_password = this.securePassword(password);
  })
  .get(function () {
    return this._password;
  });

// mongoose schema method for securing the password
userSchema.methods = {
  authenticate: function (plainPassword) {
    return this.securePassword(plainPassword) === this.encrypted_password;
  },

  securePassword: function (plainPassword) {
    if (!plainPassword) return "";
    try {
      return crypto
        .createHmac("sha256", this.salt)
        .update(plainPassword)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
};

module.exports = mongoose.model("User", userSchema);
