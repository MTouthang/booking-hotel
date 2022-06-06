const express = require("express");
const router = express.Router();
const { getHotelId, createHotel } = require("../controllers/hotel");
const { getUserId } = require("../controllers/user");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");

router.param("hotelId", getHotelId);
router.param("userId", getUserId);

router.post(
  "/hotel/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createHotel
);

module.exports = router;
