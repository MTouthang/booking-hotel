const Hotel = require("../model/Hotels");
const User = require("../model/User");

// get hotel ID
exports.getHotelId = (req, res, next, id) => {
  Hotel.findById(id).exec((err, hotel) => {
    if (err || !hotel) {
      return res.status(400).json({
        error: "Hotel not found in the DB",
      });
    }
    req.hotel = hotel;

    next();
  });
};

// create or add hotels
exports.createHotel = (req, res) => {
  const hotel = new Hotel(req.body);

  hotel.save((err, hotel) => {
    if (err) {
      return res.status(400).json({
        err: `Hotel save failed: ${err}`,
      });
    }
    res.json(hotel);
  });
};

exports.getAllHotels = (req, res) => {
  Hotel.find().exec((err, hotels) => {
    if (err) {
      return res.status(400).json({
        error: `Cant get all hotels`,
      });
    }
    return res.json(hotels);
  });
};
