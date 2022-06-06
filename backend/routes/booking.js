const express = require("express");
const router = express.Router();
const {
  getBookingId,
  createBooking,
  getListOfBooking,
  userBooking,
} = require("../controllers/booking");
const { getUserId } = require("../controllers/user");
const { getHotelId } = require("../controllers/hotel");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");

router.param("bookingId", getBookingId);
router.param("userId", getUserId);
router.param("hotelId", getHotelId);

router.post(
  "/booking/create/:userId/:hotelId",
  isSignedIn,
  isAuthenticated,
  createBooking
);

router.get("/bookings", getListOfBooking);

module.exports = router;
