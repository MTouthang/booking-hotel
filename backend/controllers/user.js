const User = require("../model/User");
const { Booking } = require("../model/Booking");

// get user id with param
exports.getUserId = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "No user was found in DB",
      });
    }
    req.profile = user;
    next();
  });
};

// get the user with their ID
exports.getUserById = (req, res) => {
  req.profile.salt = undefined;
  req.profile.encrypted_password = undefined;
  req.profile.createdAt = undefined;
  req.profile.updatedAt = undefined;
  return res.json(req.profile);
};

// TODO -- Booking stuff
exports.userBookList = (req, res) => {
  Booking.find({ user: req.profile._id })
    .populate("user", "_id name")
    .exec((err, booking) => {
      if (err) {
        return res.status(400).json({
          error: "No order in this account",
        });
      }
      return res.json(booking);
    });
};
