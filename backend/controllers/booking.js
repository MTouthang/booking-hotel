const Booking = require("../model/Booking");

exports.getBookingId = (req, res, next, id) => {
  Booking.findById(id)
    .populate("hotel")
    .populate("user")
    .exec((err, booking) => {
      if (err) {
        return res.status(400).json({
          error: "No booking found in DB",
        });
      }

      req.body = booking;
      console.log(booking);
      next();
    });
};

// create booking
exports.createBooking = (req, res) => {
  const booking = new Booking({
    checkedIn: req.body.checkedIn,
    checkedOut: req.body.checkedOut,
    user: req.profile._id,
    hotel: req.hotel._id,
  });

  booking.save((err, booking) => {
    if (err) {
      return res.status(400).json({
        error: `BOOKING not able to save: ${err}`,
      });
    }

    res.json(booking);
  });
};

//list of all Booking
exports.getListOfBooking = (req, res) => {
  Booking.find().exec((err, bookings) => {
    if (err) {
      return res.status(400).json({
        error: `Cant get all booking: ${err}`,
      });
    }
    res.json(bookings);
  });
};
